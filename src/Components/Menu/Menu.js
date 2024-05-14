import {Link} from 'react-scroll';
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
          <div className='nav-link'><Link to='home' spy={true} smooth={true} duration={100} offset={-100}><FcHome/>Home</Link></div>
          <div className='nav-link'><Link to='about' spy={true} smooth={true} duration={100} offset={-100}><FcAbout/>About</Link></div>
          <div className='nav-link'><Link to='education' spy={true} smooth={true} duration={100} offset={-100}><FcReadingEbook/>Education</Link></div>
          <div className='nav-link'><Link to='techstack' spy={true} smooth={true} duration={100} offset={-100}><FcBiotech/>Tech stack</Link></div>
          <div className='nav-link'><Link to='projects' spy={true} smooth={true} duration={100} offset={-100}><FcVideoProjector/>Projects</Link></div>
          {/* <div className='nav-link'><Link to='work' spy={true} smooth={true} duration={100} offset={-100}><FcPortraitMode />Work experience</Link></div> */}
          <div className='nav-link'><Link to='contact' spy={true} smooth={true} duration={100} offset={-100}><FcBusinessContact/>Contact</Link></div>
        </div>
      </div>
    </>)
    :(<>
    <div className='nav-items'>
        <div className='nav-item'>
          <div className='nav-link'><Link to='home' spy={true} smooth={true} duration={100} offset={-100}><FcHome/></Link></div>
          <div className='nav-link'><Link to='about' spy={true} smooth={true} duration={100} offset={-100}><FcAbout/></Link></div>
          <div className='nav-link'><Link to='education' spy={true} smooth={true} duration={100} offset={-100}><FcReadingEbook/></Link></div>
          <div className='nav-link'><Link to='techstack' spy={true} smooth={true} duration={100} offset={-100}><FcBiotech/></Link></div>
          <div className='nav-link'><Link to='projects' spy={true} smooth={true} duration={100} offset={-100}><FcVideoProjector/></Link></div>
          {/* <div className='nav-link'><FcPortraitMode title='Experience'/></div> */}
          <div className='nav-link'><Link to='contact' spy={true} smooth={true} duration={100} offset={-100}><FcBusinessContact/></Link></div>
        </div>
      </div>
    </>)
    }
    </>
  )
}
export default Menu
