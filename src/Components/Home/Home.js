
import React from 'react'
import "./Home.css"
import Resume from '../../assets/doc/Resume.txt'
import Typewriter from 'typewriter-effect';
import { BsMoonStarsFill ,BsSunFill } from "react-icons/bs";
import { useTheme } from '../../context/ThemeContext';
const Home = () => {
  const [theme,setTheme]=useTheme()
  // handling theme
  const handleTheme=()=>{
    setTheme((prevState)=>(prevState==="light"?"dark":"light"))
  }
  return (
    <>
      <div className='container-fluid home-container' id='home'>
        <div className='theme-btn' onClick={handleTheme}>
          {theme==="light"?(<BsMoonStarsFill color='white' size={30}/>):(<BsSunFill color='white' size={30}/>)}
        </div>
        <div className='container home-content'>
          <h2>Hi 👋 I'm a</h2>
          <h1>
          <Typewriter
            options={{
            strings: ['Mern stack developer!', 'Frontend developer',"React JS developer"],
            autoStart: true,
            loop: true,
             }}
            />
          </h1>
          <div className='home-buttons'>
          <button className='btn btn-hire'>Hire Me</button>
          <a className='btn btn-cv' href={Resume} download="amitvarma.pdf">My Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
