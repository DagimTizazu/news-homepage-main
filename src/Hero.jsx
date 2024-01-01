import React from 'react'
import mobileHeroImage from './assets/images/image-web-3-mobile.jpg'
import desktopHeroImage from './assets/images/image-web-3-desktop.jpg'

function Hero() {
  return (
    <div className='hero-area'>
          <img src={mobileHeroImage} alt="web 3 hero" className='hero-area__mobile-img'/>
          <img src={desktopHeroImage} alt="web 3 hero" className='hero-area__desktop-img' />
          <div className="hero-are__text-container">
            <h1 className='hero-area__heading'>The Bright Future of Web 3.0?</h1>
          
              <p className='hero-area__text'>We dive into the next evolution of the web that claims
                  to put the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?</p>
              <a className='hero-area__button' href='index.html'>Read More</a>
            
          </div>
    </div>
  )
}

export default Hero
