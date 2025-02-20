import React from 'react'
import './css/hero.css'
import monitor from '../assets/frontLogo.webp'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
    <div className='hero-main'>
        <div className="hero">
            <div className="left">
                <div className="text">
                    <h1>GROUP CHAT
                        <br /> & EXPLORE <br />
                        ANONYMOUSLY</h1>
                        <br />
                    <p>
                    Anon Talk is great for Connecting  and  chilling with <br /> friends,   or even building  a  worldwide community.  <br />  Customize your own space to talk, play, and hang out.
                    </p>
                </div>
            </div>
            <div className="right">
                <img src={monitor} alt="Monitor" />
            </div>
        </div>
        <div className="buttons">
                    <div className="startBtn">
                        <a href="#chat"> <button type="button" className="btn btn-primary btn-lg">Get Started</button></a>
                    </div>
                    <div className="startBtn">

                    <a href="#section2"><button type="button" className="btn btn-primary btn-lg">More About us</button></a>
                    </div>
        </div>
        <br /><br />
        <hr />
    </div>
    </>
  )
}

export default Hero
