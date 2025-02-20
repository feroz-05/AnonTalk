import React from 'react'

function Navbar() {
  return (
    <>
      <nav  className="navbar navbar-main navbar-expand-lg">
            <div className="container-fluid">
                <a style={{color:'white', textDecoration:'none'}} className="navbar-brand" href="/">ANON TALK</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div  className="navbar-nav">
                    <a  href="/">Home</a>
                    <a  href='#chat'>About us</a>
                </div>
                  
                </div>
            </div>
            </nav>
    </>
  )
}

export default Navbar
