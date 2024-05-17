import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./MobileNav.css";
import { ImCross } from "react-icons/im";
import { Link } from "react-scroll";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcVideoProjector,
  FcReadingEbook,
  FcVoicePresentation,
  FcBusinessContact,
} from "react-icons/fc";
import { useState } from "react";
const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <ImCross
              onClick={handleOpen}
              size={30}
              className="mobile-nav-icon"
            />
          ) : (
            <GiHamburgerMenu
              onClick={handleOpen}
              size={30}
              className="mobile-nav-icon"
            />
          )}
          <span className="mobile-nav-title">my portfolio app</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    onClick={handleMenuClick}
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    onClick={handleMenuClick}
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    onClick={handleMenuClick}
                    to="education"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    onClick={handleMenuClick}
                    to="techstack"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcBiotech />
                    Tech stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    onClick={handleMenuClick}
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>
                {/* <div className='nav-link'><Link to='work' spy={true} smooth={true} duration={100} offset={-100}><FcPortraitMode />Work experience</Link></div> */}
                <div className="nav-link">
                  <Link
                    onClick={handleMenuClick}
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={100}
                    offset={-100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
