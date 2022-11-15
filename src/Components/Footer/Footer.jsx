import React from 'react'
import './Footer.scss'
import footer_logo from '../../assets/footer_logo.png'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {SlCalender} from 'react-icons/sl'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_logo">
          <img src={footer_logo} alt="footer_logo" />
      </div>
          <div className='footer_info'>We are pushing state of the art technology to combine machine intelligence with robust & reliable systems for solving every day problems in ways no one has ever imagined.</div>
          <div className="social_icon">
               <span> <AiFillLinkedin/> </span>
               <span> <AiFillFacebook/> </span>
               <span> <AiFillTwitterCircle/> </span>
               <span> <AiFillGithub/> </span>
          </div>
          <div className="footer1">
               <div className="footer1_card">
                    <p>Products</p>
                    <p>ATHERA Enterprise</p>
                    <p>Vecros Cloud</p>
               </div>
               <div className="footer1_card">
                    <p>solutions</p>
                    <p>Public Safety</p>
                    <p>Contruction</p>
                    <p>Transportation</p>
                    <p>Energy</p>
               </div>
               <div className="footer1_card">
                    <p>Resources</p>
                    <p>News</p>
                    <p>Enterprise</p>
                    <p>Events</p>
                    <p>Gallery</p>
                    <p>Legal</p>
               </div>
               <div className="footer1_card">
                    <p>Support</p>
                    <p>FAQS</p>
                    <p>Contact Support</p>
                    <p>Vecros School</p>
               </div>
               <div className="footer1_card">
                    <p>Abouts Us</p>
                    <p>Team</p>
                    <p>Career</p>
               </div>
          </div>
          <div className="footer2_wrapper">
               <div className="footer2_1">
                    <p>  Contact US </p>
                    <p> <AiOutlineMail/> contact@vecros.com</p>
                    <p> <HiOutlineLocationMarker/> New Delhi-110016</p>
                    <p> <SlCalender/> Monday to saturday</p>
               </div>
               <div className="footer2_2">
                    <p>Subcribe</p>
                    <p>Be the first to hear about our new launch.</p>
                    <form>
                         <input type="text" placeholder='Your Email Address' />
                         <button>Submit</button>
                    </form>
               </div>
          </div>
          <hr />
          <div className="footer3">
               <p>Copyright © <a href="#">VECROS TECHNOLOGIES PVT LTD </a>2022.</p>
          </div>
    </div>
  )
}

export default Footer
