import React from 'react'
import Slide from '../components/Slide'
import ImageInfo from '../components/ImageInfoL'
import ImageInfoR from '../components/ImageInfoR'
import FeedbackCard from '../components/FeedbackCard'
import Footer from '../components/Footer'
import Hero from '../components/HeroSectiion'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
        <div className="slide">
           <Hero/>
        </div>
        <div id='section2' className='hue'></div>

        <div className="imageInfo">
            <ImageInfo/>
            <hr />
        </div>
        <div className="lastInfo">
        <div className='hue1'></div>
            <marquee behavior="scroll" direction="left" scrollamount="25">
                ANON TALK - WHERE VOICES CONNECT BEYOND IDENTITIES, ENABLING REAL CONVERSATIONS IN A TRULY ANONYMOUS WORLD.
            </marquee>
            
        </div>
        <div id='chat' className="Video-Buttons">
                    <div className="startBtn">
                        <Link to="/video" ><button type="button"  className="btn btn-primary btn-lg">Start Video</button></Link>
                    </div>
                    <div className="startBtn">

                    <Link to="/text" ><button type="button"  className="btn btn-primary btn-lg">Start Chat</button></Link>
                    </div>
        </div>

        <div className="footer">
            <Footer/>
        </div>
    </>
  )
}

export default Home
