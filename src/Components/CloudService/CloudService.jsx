import React from 'react'
import './CloudService.scss'
import slide1 from '../../assets/drive.jpg'
import slide2 from '../../assets/fleet_ops.jpg'
import slide3 from '../../assets/inspect.jpg'
import slide4 from '../../assets/workFlow.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const arr = [slide1,slide2,slide3,slide4]
const buttons = ["DRIVE","FLEET OPS","INSPECT","WORKFLOW"]

const CloudService = () => {
     let [idx,setidx] = useState(0);
     const btn_ref = useRef();
     const slider_imgRef = useRef();
     
     const nextHandler = () => {
          if(idx<arr.length-1) setidx(idx=>idx+1)
          else setidx(0);
     }
     const prevHandler = () => {
          if(idx>0) setidx(idx=>idx-1)
          else setidx(arr.length-1);
     }
     useEffect(()=>{
          const timer = setInterval(() => {
               setidx(idx=>(idx+1)%arr.length)
               slider_imgRef.current.style.backgroundImage = `url(${arr[idx]})`
          }, 3000);
          slider_imgRef.current.style.backgroundImage = `url(${arr[idx]})`
          return ()=>{
               clearInterval(timer)
          }
     },[idx])
  return (
    <div className='cloudService'>
      <h1>Vecros Cloud Service</h1>
      <p>Connected operations from anywhere in the world</p>

      <div className="cloudSlide_cont">
          <div ref={slider_imgRef} className="slider_img">
          </div>
          <div ref={btn_ref} className="slide_button">
               {buttons.map((item,index)=>{
                    return <button key={item} onClick={()=>setidx(index)}  className={`${index==idx?'active_btn':''}`}>{item}</button>
               })}
          </div>
          <div className="slide_button2">
               <button onClick={prevHandler}>prev</button>
               <button onClick={nextHandler}>next</button>
          </div>
      </div>
    </div>
  )
}

export default CloudService
