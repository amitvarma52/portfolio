import React,{useState}from 'react'
import { AiOutlineDoubleLeft,AiOutlineDoubleRight  } from "react-icons/ai";
import Home from '../../Components/Home/Home'
import './Layout.css'
import { useEffect } from "react";
const Layout = () => {
  const [toggle,setToggle]=useState(true)
  // change togglee
  const handleToggle= ()=>{
    setToggle(!toggle)
  }
  return (
    <>
    <div className='sidebar-section'>
      <div className={toggle? "toggle-sidebar sidebar":"sidebar"}>
        <div className='sidebar-toggle-icon'>
          <p onClick={handleToggle}>
            {
              toggle?(<AiOutlineDoubleLeft size={30}></AiOutlineDoubleLeft>):(<AiOutlineDoubleRight size={30}></AiOutlineDoubleRight>)
            }
          </p>
        </div>
      </div>
      <div className='container'>
        <Home></Home>
      </div>
    </div>
    </>
  )
}

export default Layout
