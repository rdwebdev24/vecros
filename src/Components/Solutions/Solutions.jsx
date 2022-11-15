import {React,useState} from 'react'
import './Solution.scss'
import Slider from "react-slick";
import slide1 from '../../assets/construction.png'
import slide2 from '../../assets/transportation.png'
import slide3 from '../../assets/oil_and_gas.png'
import slide4 from '../../assets/public_safety.png'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useRef } from 'react';
import { useEffect } from 'react';

const images = [slide3, slide2, slide4, slide1];
const solution_arr = [
  {
    head:"Oil and GAS",
    info:"Allow oil and gas companies to inspect their infrastructure and assets faster and provide more detailed data while reducing safety risks, costs, and operational downtime",
    bgImage:slide1
  },
  {
    head:"Transportation",
    info:"Monitor and perform inspection of crucial infrastructure, including bridges, highways, and railroad tracks and improve workflow efficiency.",
    bgImage:slide2
  },
  {
    head:"Public Safety",
    info:"Equip first responders with autonomous drones for law enforcement, firefighting, and SAR operations and ensure a safe environment for all.",
    bgImage:slide3
  },
  {
    head:"Construction",
    info:"Allow oil and gas companies to inspect their infrastructure and assets faster and provide more detailed data while reducing safety risks, costs, and operational downtime",
    bgImage:slide4
  },
]
const Solutions = () => {
const [imagePos, setImagePos] = useState(100);
const slides_ref = useRef();

useEffect(()=>{
  let slides_arr = Array.from(slides_ref.current.children);
    slides_arr.forEach(((item,index)=>{
      item.style.backgroundImage = `url(${images[index]})`
    }))
})

const leftClick = () => {
  if(imagePos>=300) setImagePos(-100)
  let slides_arr = Array.from(slides_ref.current.children);
  slides_arr.forEach((item,idx)=>{
    item.style.transform = `translateX(-${imagePos}%)`
  })
  setImagePos(imagePos=>imagePos+100)
}
const rightClick = () => {
  if(imagePos==300) setImagePos(-100)
  let slides_arr = Array.from(slides_ref.current.children);
  slides_arr.forEach((item,idx)=>{
    item.style.transform = `translateX(-${imagePos}%)`
  })
  setImagePos(imagePos=>imagePos+100)
}

  return (
    <div className='solution'>
      <h1>Solutions</h1>
      <div ref={slides_ref} className="slider_wrapper">
        {solution_arr.map((item,index)=>{
          const {head,info} = item
            return <div key={index}  className="slides">
              <p>{head}</p>
              <p>{info}</p>
              <a href="#">Learn more </a>
            </div>
        })}
      </div>
       
      <div onClick={leftClick} className="arrow arrow-left"><SlArrowLeft/></div>
      <div onClick={rightClick} className="arrow arrow-right"><SlArrowRight/></div>
    </div>
  )
}

export default Solutions
