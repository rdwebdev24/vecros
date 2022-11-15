import React from 'react'
import Autonomous from '../Autonomous/Autonomous'
import CloudService from '../CloudService/CloudService'
import Jeptix from '../Jeptix/Jeptix'
import LandingPage from '../LandingPage/LandingPage'
import Order from '../Order.jsx/Order'
import Solutions from '../Solutions/Solutions'

const Vercos = () => {
  return (
    <div>
      <LandingPage/>
      <Jeptix/>
      <Autonomous/>
      <CloudService/>
      <Solutions/>
      <Order/>
    </div>
  )
}

export default Vercos
