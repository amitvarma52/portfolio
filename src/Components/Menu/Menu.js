import React from 'react'
import "./Menu.css"
import { FcHome,FcAbout, FcPortraitMode, FcBiotech, FcVideoProjector, FcReadingEbook, FcVoicePresentation, FcBusinessContact } from "react-icons/fc";
import portfolioImage from '../../Images/por.png'
const Menu = ({toggle}) => {
  return (
    <>
    {toggle ? (<>
        <div className='navbar-profile-pic'>
        <img src={portfolioImage} alt='profile pic' />
      </div>
      <div className='nav-items'>
        <div className='nav-item'>
          <div className='nav-link'><FcHome/>Home</div>
          <div className='nav-link'><FcAbout/>About</div>
          <div className='nav-link'><FcReadingEbook/>Education</div>
          <div className='nav-link'><FcBiotech/>Tech stack</div>
          <div className='nav-link'><FcVideoProjector/>Projects</div>
          <div className='nav-link'><FcPortraitMode />Work experience</div>
          <div className='nav-link'><FcBusinessContact/>Contact</div>
        </div>
      </div>
    </>)
    :(<>
    <div className='nav-items'>
        <div className='nav-item'>
          <div className='nav-link'><FcHome title='Home'/></div>
          <div className='nav-link'><FcAbout title='About'/></div>
          <div className='nav-link'><FcReadingEbook title='Education'/></div>
          <div className='nav-link'><FcBiotech title='Tech-stack'/></div>
          <div className='nav-link'><FcVideoProjector title='Projects'/></div>
          <div className='nav-link'><FcPortraitMode title='Experience'/></div>
          <div className='nav-link'><FcBusinessContact title='Contact'/></div>
        </div>
      </div>
    </>)
    }
    </>
  )
}
export default Menu
