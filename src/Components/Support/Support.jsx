import React from 'react'
import './Support.scss'
import {Link , Outlet} from 'react-router-dom'
const Support = () => {
  return (
    <div className='support'>
      <Outlet/>
    </div>
  )
}

export default Support
