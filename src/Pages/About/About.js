import React from 'react'
import './About.css'
import portfolioImage from '../../Images/por.png'
const About = () => {
  return (
    <>
     <div className='about' id='about'>
      <div className='row'>
        <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
          <img src={portfolioImage} alt='profile img'></img>
        </div>
        <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
          <h1>About me</h1>
          <p>Passionate about crafting seamless and dynamic web experiences, I am a dedicated frontend developer with a keen eye for design and a knack for problem-solving. With a strong foundation in HTML, CSS, and JavaScript,React</p>
        </div>
      </div>
      </div> 
    </>
  )
}

export default About
