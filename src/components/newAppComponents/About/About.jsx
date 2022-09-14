import React, { useContext } from "react";

import { LanguageContext } from "../../../context/languageContext";
import about from "../../../elements-Data/about/about";
import './about.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCss3Alt,
  faAngular,
  faReact,
  faHtml5,
  faNode,
  faJs,
  faJava,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faEnvelope, faScroll } from "@fortawesome/free-solid-svg-icons";

function About() {
  const { Language } = useContext(LanguageContext);

  return (
    <div style={{ color: 'white' }} id='About'>
      <h2 className="">{about[Language].about}</h2>
      <div >

        <div className="About-Left">
          <h2>Gabriel P. Oliveira</h2>
          <div>
            <span><FontAwesomeIcon icon={faLinkedin} /></span>
            <span> <FontAwesomeIcon icon={faGithub} /></span>
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
          </div>
        </div>
        <div className="About-right">
          <p className="">{about[Language].about_text}
            <br></br>
            {about[Language].about_sub_text}</p>
            <span><FontAwesomeIcon icon={faScroll} /></span>

          {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sapiente atque veniam ducimus aliquid eaque eius illum asperiores nostrum perspiciatis, <br></br> voluptatem perferendis ea facere debitis possimus vel explicabo eum tenetur.</p> */}
        </div>
      </div>

      {/* <p>sSOMETHING SOMETHING SOMETHING</p>
      <button>Button</button>
      <div >
        <ul>
          <li>Java</li>
          <li>JavaScript</li>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>Node js</li>
          <li>React js</li>
          <li>Angular</li>
        </ul>
        <div>
          <p>emp: tk</p>
          <p>Client: se endi esse </p>
          <p>tempo: </p>
          <p>Desc: </p>
          <p>techs: </p>
        </div>
        <div>
          <p>emp: Sirch</p>
          <p>tempo: </p>
          <p>Desc: </p>
          <p>techs: </p>
        </div>
        <div>
          <p>emp: pretos</p>
          <p>tempo: </p>
          <p>Desc: </p>
          <p>techs: </p>
        </div>
        <div>More...</div> */}

      {/* </div> */}

    </div>
  )
}

export default About