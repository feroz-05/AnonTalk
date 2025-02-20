import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import axios from "axios";

// Load API URL from environment variables
const API_URL = "http://localhost:3000";
const socket = io(API_URL, { query: { name: "User-" + Math.floor(Math.random() * 1000) } });

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Fetch chat history from API
    axios.get(`${API_URL}/api/messages?sender=User1&receiver=User2`).then((res) => {
      setMessages(res.data);
      scrollToBottom();
    });

    // Listen for incoming messages
    const handleMessage = (message) => {
      setMessages((prev) => [...prev, message]);
      scrollToBottom();
    };

    socket.on("receiveMessage", handleMessage);
    return () => socket.off("receiveMessage", handleMessage);
  }, []);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    setTimeout(() => {
      chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: "smooth" });
    }, 100);
  };

  // Send message
  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = { sender: "User1", receiver: "User2", text: input };
      socket.emit("sendMessage", newMessage);
 
      setInput("");
      scrollToBottom();
    }
  };

  return (
    <div className="chatBox">
      <div className="card">
        <div className="card-header">
          <span className="card-header-title">
            <i className="fa fa-comments"></i> Chat
          </span>
        </div>
        <div ref={chatContainerRef} className="chat-content">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "User1" ? "chat-message-group sender" : "chat-message-group receiver"}>
              <div className="chat-messages">
                <div className="message">{msg.text}</div>
                <small className="from">{msg.sender}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chat-textarea"
            placeholder="Type a message..."
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
