import React,{useEffect} from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Tilt from '../../assets/svg/tilt/Tilt'

function Contact() {



    return (
        <div className="contact">
            <form className="form">
                <h2>contact</h2>
                <span>Feel free to get in touch, I will return as soon as possible.</span>
                <p className="mb-2"><a href="mailto:gabriel.pso100@gmail.com">Send a email. <FontAwesomeIcon icon={faPaperPlane}/></a></p>

                <div className="form-top">
                    <div className="input-conteiner">
                        <label htmlFor="Name" className="label"><FontAwesomeIcon icon={faUser}/></label>
                        <input type="text" className="name" placeholder="Name"/>
                    </div>
                    <div className="input-conteiner">
                        <label htmlFor="Email" className="label"><FontAwesomeIcon icon={faEnvelope}/></label>
                        <input type="text" className="email" placeholder="Email"/>
                    </div>
                </div>
                <div className="subject">  
                    <input type="text" placeholder="subject" className="subject-input"/>
                </div>
                <div className="message">
                    <label htmlFor=""></label>
                    <textarea type="text" placeholder="message" />
                </div>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Contact
