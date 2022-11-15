import React from 'react'
import './Contact.scss'
import contact_img from '../../assets/contact_img.jpeg'
import {AiOutlineMail} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'
const Contact = () => {
  return (
       <div className='contact_us_wrapper'>
          <div className="contact_main">
               <h1>contact us</h1>
          </div>
          <div className="contact_us">
               <div className="contact_form">
                    <form>
                         <h3>Contact Us</h3>
                         <input type="text" placeholder='Name*'/>
                         <input type="text" placeholder='Email Address*'/>
                         <input type="text" placeholder='Whatare you looing for?'/>
                         <textarea type="text" placeholder='Message'/>
                         <button>SEND MAIL</button>
                    </form>
               </div>
               <div className="contact_images">
                    <h3>We are here for you. How we can help you?</h3>
                    <img src={contact_img} alt="" />
                    <div className="mail_cont">
                         <div className="mail">
                              <span className="mail_icon">
                                   <AiOutlineMail/> 
                              </span>
                              <span>Email</span>
                         <p>contact@vecros.com</p>
                              </div>
                         <div className="address">
                             <span className='address_icon'>
                             <HiOutlineLocationMarker/> 
                                  </span>
                             <span>Address</span>
                              <p>Module-4, TBIU, Synergy Building, IIT Delhi, New Delhi- 110016</p>
                         </div>
                    </div>
               </div>
          </div>
    </div>
  )
}

export default Contact
