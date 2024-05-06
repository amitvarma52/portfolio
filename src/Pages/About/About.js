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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus facere optio odio nemo commodi tempore? Mollitia, perspiciatis sequi molestias ullam ea exercitationem quaerat ratione facilis perferendis doloribus. Suscipit tempore iste, totam corrupti ea quod earum veniam minima? Tempora fugiat quo dolore vero at consequatur perspiciatis magnam ad dolorum quas hic, nobis fuga quasi distinctio harum, sunt ut, recusandae nihil doloremque est quis minima illo. Saepe quam et, voluptatem natus animi necessitatibus assumenda. Tempore!</p>
        </div>
      </div>
      </div> 
    </>
  )
}

export default About
