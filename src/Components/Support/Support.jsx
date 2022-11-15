import React from 'react'
import Contact_support from './Contact_support'
import FAQS from './FAQS.jsx'
import './Support.scss'
import Tranning_school from './Tranning_school'
import {Link , Outlet} from 'react-router-dom'
const Support = () => {
  return (
    <div className='support'>
      <Outlet/>
    </div>
  )
}

export default Support
