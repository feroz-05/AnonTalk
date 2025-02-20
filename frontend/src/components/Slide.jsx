import React from 'react'

function Slide() {
  return (
    <>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
        <img src="https://res.cloudinary.com/do1ka4dxb/image/upload/v1735076037/pexels-ijoxi-studios-274852259-12900346_kvautl.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
        <img src="https://res.cloudinary.com/do1ka4dxb/image/upload/v1735076037/WhatsApp_Image_2024-12-23_at_5.44.29_AM_fz4zmz.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
        <img src="https://res.cloudinary.com/do1ka4dxb/image/upload/v1735076037/WhatsApp_Image_2024-12-23_at_5.44.30_AM_1_xldx3f.jpg" className="d-block w-100" alt="..."/>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
    </>
  )
}

export default Slide
