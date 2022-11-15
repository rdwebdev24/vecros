import React from 'react'
import './Jeptix.scss'
import jeptix_gif from '../../assets/ezgif.com-gif-maker.gif'
const Jeptix = () => {
  return (
    <div className='jeptix'>
      <div className="vedio_cont">
          <img src={jeptix_gif} alt="jeptix" />
      </div>
      <div className="jeptix_info">
          <h1>Powered by JETPIX™</h1>
          <p className='para1'>Sense the 3D world around you</p>
          <p> <span className='jeptix_bold'>JETPIX™ </span>is state of the art Operating System developed in house at <span className='jeptix_bold'>VECROS </span> .</p>
          <p><span className='jeptix_bold'>JETPIX™</span> is equipped with vision aided navigation technology that enables a fail safe path planning and interactive experience to pilots and users.</p>
          <button>LEARN MORE</button>
      </div>
    </div>
  )
}

export default Jeptix
