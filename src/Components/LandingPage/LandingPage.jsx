import React from 'react'
import './LandingPage.scss'
import {MdArrowBackIosNew,MdArrowForwardIos} from 'react-icons/md'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import landing from '../../assets/landingPage.png'
import landing2 from '../../assets/landingPage2.png'
const array = [
  {
    head:"ANTHERA",
    info:"Smart Drone and Scalable operations",
    bgImage:landing
  },
  {
    head:"VERCOS CLOUD",
    info:"Scalable operationat fingertips",
    bgImage:landing2
  }
]
const LandingPage = () => {
  const landing_ref = useRef('');
  let [idx,setidx] = useState(0)

  const rightClick = () => {
    if(idx<array.length-1) setidx(idx++);
    else setidx(idx--);
  }
  const leftClick = () => {
    if(idx>0) setidx(idx--);
    else setidx(idx++);
  }
  
  useEffect(()=>{
    landing_ref.current.style.backgroundImage = `url(${array[idx].bgImage})`
  })
  return (
    <div ref={landing_ref} className='landingPage_wrapper'>
      <div className="landing_info">
          <h1>{array[idx].head}</h1>
          <p>{array[idx].info}</p>
          <div className="landing_button">
               <button>WATCH VIDEO</button>
               <button>LEARN MORE</button>
          </div>
      </div>
      <div onClick={leftClick} className="arrow left-arrow"><MdArrowBackIosNew/></div>
      <div onClick={rightClick} className="arrow right-arrow"><MdArrowForwardIos/></div>
    </div>
  )
}

export default LandingPage
