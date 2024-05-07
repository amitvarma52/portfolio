import React from 'react'
import './Techstack.css'
import {TechStackList} from "../../utils/TechStackList.js"
const Techstack = () => {
  return (
    <>
      <div className='container techstack'>
        <h2 className='col-12 mt-3 mb-1 text-center'>Technologies Stack</h2>
        <hr></hr>
        <p className='pb-3 text-center'>👉 Inculuding programming ,Libraries ,databases,front-end tools,and API's
        </p>
      <div className='row'>
        {TechStackList.map(tech=>{
          return <div key={tech.id} className='col-md-3'>
            <div className='card m-2'>
              <div className='card-content'>
                <div className='card-body'>
                  <div className='media d-flex justify-content-center'>
                    <div className='align-self-center'>
                      <tech.icon className='tech-icon'></tech.icon>
                    </div>
                    <div className='media-body'>
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
    </>
  )
}

export default Techstack
