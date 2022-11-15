import {React,useRef} from 'react'
import './Faqs.scss'
import {BsPlusLg} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'
const question = [
     {
          ques:"Lorem ipsum dolor sit amet.",
          ans:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus commodi, beatae ipsam quidem adipisci doloremque."
     },
     {
          ques:"Lorem ipsum dolor sit amet.",
          ans:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus commodi, beatae ipsam quidem adipisci doloremque."
     },
     {
          ques:"Lorem ipsum dolor sit amet.",
          ans:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus commodi, beatae ipsam quidem adipisci doloremque."
     },
     {
          ques:"Lorem ipsum dolor sit amet.",
          ans:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus commodi, beatae ipsam quidem adipisci doloremque."
     },
]

const FAQS = () => {
     const ques_ref = useRef();
     const clickHandler =(idx)=>{
          console.log(ques_ref.current.children[1]);
     }
  return (
    <>
          <div className="faq_landing">
               <h1>Frequently Asked Questions</h1>
          </div>
          <div className="faq3">
               <div className='faqs_info'>
                    <h3>Still have a question?</h3>
                    <p>If you cannot find answer to your question in our FAQ. You can always contact us. We will answer you shortly!</p>
               </div>
               <button>Contact Us</button>
          </div>
    </>
  )
}

export default FAQS
