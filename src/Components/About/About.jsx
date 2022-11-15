import React from 'react'
import {Outlet} from 'react-router-dom'
import Team from './Team'
import './About.scss'
const About = () => {
  return (
    <div>
     <div className="about">
          <h1>ABOUT US</h1>
          <div className="about_para">
          We began as a small student group working on drones from the IIT Delhi. Now we are taking the next step, combining the principles of dynamic control and balance with sophisticated mechanical designs, cutting-edge electronics, and software for perception, navigation, and intelligence. VECROS has an extraordinary technical team of engineers and scientists who seamlessly combine advanced analytical thinking with bold engineering and first principle thinking. We pride ourselves on building machines that push the limits of robotic technologies that were considered impossible.We are trusted by IIT Delhi, NSRCEL-IIMB, STARTUP OASIS, 100xVC, and many more reputed institutes for our innovation and products.
          </div>
     </div>
         <Outlet/> 
    </div>
  )
}

export default About
