import React from 'react'
import './team.scss'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import team1 from '../../assets/prem.jpg'
import team2 from '../../assets/rajeshree.jpg'
import team3 from '../../assets/Deepak.jpg'
import team4 from '../../assets/add.png'

const team_arr = [
  {
    name:"Besta Prem Sai",
    title:"CEO",
    img:team1
  },
  {
    name:"Rajeshree Deotalu",
    title:"CTO",
    img:team2
  },
  {
    name:"Deepak Kumar",
    title:"Product designer",
    img:team3
  },
  {
    name:"Deepak Kumar",
    title:"Product designer",
    img:team4
  }
]
const Team = () => {
  return (
  <>
    <div className='team'>
      <div className="team1">
        <div className="team1_1">
          <h3>
            Let's Meet Our Team
          </h3>
            <div className='member'>
              <p>5 MEMBER</p>
              <div>
                <span>DESIGNER</span>
                <span>MARKETER</span>
                <span>DEVELOPER</span>
              </div>
            </div>
        </div>
          <div className="team1_2">
              <h1>Our Team</h1>
              <p>We began as a small student group working on drones from the IIT Delhi. We are team of enthusiasts and problem solvers who stepped on a journey to solve complex world problems with simple yet effective robot solutions.</p>
          </div>
      </div>
        <div className="team2">
          {team_arr.map((item,idx)=>{
            const {title,name,img} = item
            return <div className="team_card">
            <img src={img} alt="" />
            <div className='team_member_info'>
              <p>{name}</p>
              <p>{title}</p>
              <div className="social_icon">
                <AiFillLinkedin/>
                <AiFillFacebook/>
                <AiFillTwitterCircle/>
              </div>
            </div>
          </div>
          })}
        </div>
    </div>
    <div className="team3">
      <div className="team3_1">
        <h3>Purchase your enterprise drone with us!</h3>
        <p>we began as a small student group working on drones from the IIT Delhi</p>
        <button>GET IN TOUCH WITH US</button>
      </div>
      <div className="team3_2">
        <h3>Wanna work with us?</h3>
        <p>we began as a small student group working on drones from the IIT Delhi</p>
        <button>START YOUR JOURNEY WITH US</button>
      </div>
    </div>
    </>
  )
}

export default Team
