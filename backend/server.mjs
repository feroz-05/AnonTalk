import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Middleware
app.use(express.json());
app.use(cors());

// User & Room Management
class UserManager {
  constructor() {
    this.users = [];
    this.queue = [];
  }
  createUser(user, socket) {
    this.users.push({ user, socket });
    this.queue.push(socket.id);
  }
  deleteUser(socketId) {
    const index = this.users.findIndex((user) => user.socket.id === socketId);
    if (index !== -1) {
      return this.users.splice(index, 1)[0];
    }
    this.queue = this.queue.filter((id) => id !== socketId);
  }
}

class RoomManager {
  constructor() {
    this.rooms = new Map();
  }
  createRoom(user1, user2) {
    const roomId = Math.random().toString();
    this.rooms.set(roomId, { user1, user2 });
    console.log("Creating room");
    user1.socket.emit("on-offer", { roomId });
    user2.socket.emit("on-offer", { roomId });
  }
  onOffer(socket) {
    for (const [roomId, room] of this.rooms.entries()) {
      if (room.user1.socket === socket || room.user2.socket === socket) {
        socket.emit("offer", { roomId, socket });
        return;
      }
    }
  }
  onAnswer(roomId, sdp, senderSocketid) {
    const room = this.rooms.get(roomId);
    if (!room) return;
    const receivingUser =
      room.user1.socket.id === senderSocketid ? room.user2 : room.user1;
    receivingUser?.socket.emit("answer", { sdp, roomId });
  }
}

const userManager = new UserManager();
const roomManager = new RoomManager();

io.on("connection", (socket) => {
  console.log("User connected", socket.id);
  
  const user = socket.handshake.query.name || `User-${socket.id}`;
  userManager.createUser(user, socket);

  // Text Chat Feature
  socket.on("sendMessage", (data) => {
    io.emit("receiveMessage", { text: data.text });
  });
  
  // WebRTC Signaling
  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
  });
  
  socket.on("disconnect", () => {
    userManager.deleteUser(socket.id);
    socket.broadcast.emit("disconnected", "User Disconnected!");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
