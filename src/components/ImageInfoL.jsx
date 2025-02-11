import React from 'react'
import img1 from '../assets/img1.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

function ImageInfo(props) {
  return (
    <>
    <div className="imageInfoDiv">
      <div className="img">
        <img src={img1} className="img-fluid" alt="image"></img>
      </div>
        <div className="info">
           <h2>Talk, text, and share without limits!</h2>
           <p>Enjoy the freedom of boundless communication! Send as many messages as you want, make high-quality video calls without limits, and share images, videos, and files effortlessly. Whether you're catching up with friends, collaborating on a project, or sharing life’s moments, our platform keeps you connected—without restrictions.</p>
        </div>
        <div className="gooye">
        </div>
    </div>

    <div className="imageInfoDiv">
        <div className="info">
            <h2>Effortless, Real-Time Conversation's</h2>
            <p>Stay connected with friends, family, and colleagues without interruptions.
            Our platform ensures smooth, uninterrupted messaging and video calls, so you never miss an important moment.
            Whether you're texting a quick "hello" or having an in-depth video chat, communication has never been easier.</p>
        </div>
        <div className="img">
        <img src={img3} className="img-fluid" alt="image"></img>
      </div>
        <div className='octagon'></div>
    </div>

    <div className="imageInfoDiv">
    <div className="img">
        <img src={img4} className="img-fluid" alt="image"></img>
      </div>
        <div className="info">
            <h2>No delays, no barriers pure connection!</h2>
            <p>Stay connected with friends, family, and colleagues without interruptions.
            Our platform ensures smooth, uninterrupted messaging and video calls, so you never miss an important moment.
            Whether you're texting a quick "hello" or having an in-depth video chat, communication has never been easier.</p>
        </div>
        <div className="gooye">
        </div>
    </div>
    </>
  )
}

export default ImageInfo
