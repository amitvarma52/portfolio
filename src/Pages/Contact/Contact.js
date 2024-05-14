import React from 'react'
import './Contact.css'
import { BsLinkedin ,BsGithub} from "react-icons/bs";
import ContactImage from '../../Images/contact.png'
const Contact = () => {
  return (
    <>
    <div className=' contact' id='contact'>
      <div className='card card0 border-0'>
        <div className='row'>
          <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 con'>
            <div className='card1'>
              <div className='row border-line'>
                <img src={ContactImage} className='image' alt='contact'></img>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 con'>
              <div className='card2 d-flex card border-0 px-4 py-3'>
            <div className='row'>
                <div className='row'>
                <h6>Contact with<BsLinkedin color='blue' size={30} className='ms-1'/>
                <BsGithub size={30} className='ms-1'/>
                </h6>
                </div>
              <div className='row px-3 mb-4'>
                <div className='line'/>
                <small className='or text-center'>OR</small>  
                <div className='line'/>
              </div>
              <div className='row px-3'>
                <input type='text' placeholder='Enter your name ' name='name' className='mb-3'></input>
              </div>
              <div className='row px-3'>
                <input type='email' placeholder='Enter your email ' name='email' className='mb-3'></input>
              </div>
              <div className='row px-3'>
                <textarea type='text' placeholder='Write your message ' name='msg' className='mb-3' />
              </div>
              <div className='row px-3'>
                <button className='button' type='submit'>Send message</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
