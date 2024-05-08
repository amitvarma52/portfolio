import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <>
      <div className='container projects'>
      <h2 className='col-12 mt-3 mb-1 text-center'>Recent Projects</h2>
        <hr></hr>
        <p className='pb-3 text-center'>👉here are my 3 recent project with live links and source code
        </p>
        <div className='row' id='ads'>
        <div className='col-md-4'>
            <div className='card rounded'>
              <div className='card-image'>
                <span className='card-notify-badge'>full stack </span>
                <img src='https://www.researchgate.net/publication/351574981/figure/fig1/AS:1023236699598848@1620970048104/The-Netflix-homepage-an-example-of-carousel-user-interface-in-the-multimedia-streaming.jpg' alt='project1'/>
              </div>
              <div className='card-image-overly m-auto mt-3'>
                <span className='card-detail-badge'>HTML</span>
                <span className='card-detail-badge'>CSS</span>
                <span className='card-detail-badge'>React</span>
              </div>
              <div className='card-body text-center'>
                <div className='ad-title m-auto'>
                  <h5 className='text-uppercase'>Netflix UI</h5>
                </div>
                <a className='ad-btn' href=''>view</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card rounded'>
              <div className='card-image'>
                <span className='card-notify-badge'>UI</span>
                <img src='https://www.researchgate.net/publication/351574981/figure/fig1/AS:1023236699598848@1620970048104/The-Netflix-homepage-an-example-of-carousel-user-interface-in-the-multimedia-streaming.jpg' alt='project1'/>
              </div>
              <div className='card-image-overly m-auto mt-3'>
                <span className='card-detail-badge'>HTML</span>
                <span className='card-detail-badge'>CSS</span>
                <span className='card-detail-badge'>Javascript</span>
              </div>
              <div className='card-body text-center'>
                <div className='ad-title m-auto'>
                  <h5 className='text-uppercase'>DM agency Ui</h5>
                </div>
                <a className='ad-btn' href=''>view</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card rounded'>
              <div className='card-image'>
                <span className='card-notify-badge'>MERN stack </span>
                <img src='https://www.researchgate.net/publication/351574981/figure/fig1/AS:1023236699598848@1620970048104/The-Netflix-homepage-an-example-of-carousel-user-interface-in-the-multimedia-streaming.jpg' alt='project1'/>
              </div>
              <div className='card-image-overly m-auto mt-3'>
                <span className='card-detail-badge'>React</span>
                <span className='card-detail-badge'>Node</span>
                <span className='card-detail-badge'>Express</span>
                <span className='card-detail-badge'>Mongodb</span>
              </div>
              <div className='card-body text-center'>
                <div className='ad-title m-auto'>
                  <h5 className='text-uppercase'>E-commerce</h5>
                </div>
                <a className='ad-btn' href=''>view</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
