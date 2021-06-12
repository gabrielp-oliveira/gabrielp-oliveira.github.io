import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

function Contact() {



    return (
        <div id="contact">
            <h2>contact</h2>

            <form className="form">
                <span>Feel free to get in touch, I will return as soon as possible.</span>
                <div className="social">
                        <span><FontAwesomeIcon icon={faGithub} /></span>
                        <span><FontAwesomeIcon icon={faCodepen} /></span>
                        <span><FontAwesomeIcon icon={faLinkedin} /></span>

                    </div>
                <p ><a href="mailto:gabriel.pso100@gmail.com" className="emailContact">Send a email. <FontAwesomeIcon icon={faPaperPlane}/></a></p>

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
