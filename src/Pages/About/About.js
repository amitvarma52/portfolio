import React from 'react'
import './About.css'
import portfolioImage from '../../Images/por.png'
const About = () => {
  return (
    <>
     <div className='about'>
      <div className='row'>
        <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
          <img src={portfolioImage} alt='profile img'></img>
        </div>
        <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
          <h1>About me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facere optio odio nemo commodi tempore? Mollitia, perspiciatis sequi molestias ullam ea exercitationem quaerat ratione facilis perferendis doloribus. Suscipit tempore iste, totam corrupti ea quod earum veniam minimenda. Tempore!</p>
        </div>
      </div>
      </div> 
    </>
  )
}

export default About
