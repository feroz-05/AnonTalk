import React from 'react'
import Slide from '../components/Slide'
import ImageInfo from '../components/ImageInfoL'
import ImageInfoR from '../components/ImageInfoR'
import FeedbackCard from '../components/FeedbackCard'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
        <div className="slide">
            <Slide/>
        </div>
        <div className='hue'></div>
        <div className="startBtn">
            <button type="button" className="btn btn-primary btn-lg">Large button</button>
        </div>
        <div className="imageInfo">
            <ImageInfo/>
            <hr />
        </div>
        <div className="lastInfo">
        <div className='hue1'></div>
            <marquee>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus neque nulla dolore eveniet natus illum nesciunt, eius aspernatur! Praesentium, laboriosam nam sequi quibusdam voluptates velit rem molestiae corrupti error, cum ut necessitatibus.
            </marquee>
        </div>
        <div className="feedback">
            <FeedbackCard img="https://res.cloudinary.com/do1ka4dxb/image/upload/v1735076037/pexels-ijoxi-studios-274852259-12900346_kvautl.jpg" name="image" data="hey feroz this is Feedback asfjhjhsf ghad a ha hh uayhuh"/>
            <FeedbackCard img="https://res.cloudinary.com/do1ka4dxb/image/upload/v1735076037/pexels-ijoxi-studios-274852259-12900346_kvautl.jpg" name="image" data="hey feroz this is Feedback asfjhjhsf ghad a ha hh uayhuh"/>
            <FeedbackCard img="https://res.cloudinary.com/do1ka4dxb/image/upload/v1735076037/pexels-ijoxi-studios-274852259-12900346_kvautl.jpg" name="image" data="hey feroz this is Feedback asfjhjhsf ghad a ha hh uayhuh"/>
            <FeedbackCard img="https://res.cloudinary.com/do1ka4dxb/image/upload/v1735076037/pexels-ijoxi-studios-274852259-12900346_kvautl.jpg" name="image" data="hey feroz this is Feedback asfjhjhsf ghad a ha hh uayhuh"/>
            <FeedbackCard img="https://res.cloudinary.com/do1ka4dxb/image/upload/v1735076037/pexels-ijoxi-studios-274852259-12900346_kvautl.jpg" name="image" data="hey feroz this is Feedback asfjhjhsf ghad a ha hh uayhuh"/>
        </div>

        <div className="footer">
            <Footer/>
        </div>
    </>
  )
}

export default Home
