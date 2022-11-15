import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import './Navbar.scss'
import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo2.png'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const Navbar = () => {
     const [scroll,setScroll] = useState(0);
     const [navLogo,setNavLogo] = useState(logo)
     const [hamburger,setHamburger] = useState(false);
     const nav_ref = useRef();
     const contact_ref = useRef();
     const nav_items_list = useRef();

     useEffect(()=>{
               window.addEventListener('scroll',(e)=>{
                    setScroll(document.documentElement.scrollTop);
                    if(document.documentElement.scrollTop>400){
                         nav_ref.current.style.backgroundColor = '#fff'
                         nav_ref.current.style.color = '#000'
                         nav_items_list.current.style.backgroundColor = '#fff'
                         contact_ref.current.style.color = '#fff'
                         setNavLogo(logo2)
                    }else{
                         nav_items_list.current.style.backgroundColor = 'rgb(12,12,12)'
                         nav_ref.current.style.backgroundColor = 'rgb(12, 12, 12)'
                         nav_ref.current.style.color = '#fff'
                         setNavLogo(logo)
                    }
               })
          })
          
          const navHandler = () => {
               setHamburger(!hamburger)
     }
return (
    <nav ref={nav_ref}>
      <div className="logo">
          <img src={navLogo} alt="vecros" />
      </div>
          <div onClick={navHandler} className="hamburger">
               <GiHamburgerMenu/>
          </div>
      <div ref={nav_items_list} className={`nav-items-list ham ${hamburger?'show_nav':''}`}>
          <div className="nav-items">jeptix autonomy</div>
          <div className="nav-items">
          products
          <div className={`dropdown ${scroll>400?'dropdownScroll':''}`}>
               <a href="#">ATHERA</a>
               <a href="#">VECROS CLOUD</a>
          </div>
          </div>
          <div className="nav-items">
               solutions
               <div className={`dropdown ${scroll>400?'dropdownScroll':''}`}>
                    <a href="#">Oil and GAS</a>
                    <a href="#">PUBLIC SAFETY</a>
                    <a href="#">CONSTRUCTION</a>
                    <a href="#">TRANSPORTATION</a>
               </div>
          </div>
          <div className="nav-items">
               resources
               <div className={`dropdown ${scroll>400?'dropdownScroll':''}`}>
                    <a href="#">NEWS</a>
                    <a href="#">ENTERPRISE CUSTOMER</a>
                    <a href="#">GALLERY</a>
                    <a href="#">LEGAL</a>
               </div>
          </div>
          <div className="nav-items">
               support
               <div className={`dropdown ${scroll>400?'dropdownScroll':''}`}>
                    <a href="#">FAQS</a>
                    <a href="#">CONTACT SUPPORT</a>
                    <a href="#">TRAINING SCHOOL</a>
               </div>
          </div>
          <div className="nav-items">
               about
               <div className={`dropdown ${scroll>400?'dropdownScroll':''}`}>
                    <a href="#">TEAM</a>
                    <a href="#">CAREERS</a>
               </div>
          </div>
          <div ref={contact_ref} className="nav-items">contact us</div>
      </div>
    </nav>
  )
}

export default Navbar
