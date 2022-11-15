import React from 'react'
import autonomous_img from '../../assets/autonous_3d_car.png'
import './Autonomous.scss'
const Autonomous = () => {
  return (
    <div className='autonomous'>
         <div className="autonomous_img">
          <img src={autonomous_img} alt="autonomous_img" />
         </div>
         <div className="autonomous_info">
          <h1>Autonomous 3D Capture</h1>
          <p>Just click a button to automate your entire inspection pipeline</p>
          <button>LEARN MORE</button>
         </div>
    </div>
  )
}

export default Autonomous