import React, { useContext } from "react";
import { LanguageContext } from "../../../context/languageContext";
import about from "../../../elements-Data/about/about";
import tpData from "../../../elements-Data/companies/techproject.js";
import petros from "../../../elements-Data/companies/petros.js";
import sirchData from "../../../elements-Data/companies/sirch.js";
import aboutStyle from './about.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import Company from '../company/company'
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
    <div style={{ color: 'white' }} id={aboutStyle.About} >
      <h2 className="">{about[Language].about}</h2>
      <div >

        <div className={aboutStyle.AboutLeft}>
          <h2>Gabriel P. Oliveira</h2>
          <div>
            <span><FontAwesomeIcon icon={faLinkedin} /></span>
            <span> <FontAwesomeIcon icon={faGithub} /></span>
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
          </div>
        </div>
        <div className={aboutStyle.AboutRight}>
          <p className="">{about[Language].about_text}
            <br></br>
            {about[Language].about_sub_text}</p>
            <span>
              <br/>
              <a target="blank" href={about[Language].resume}>
                <Button variant="contained" color="secondary">
                <FontAwesomeIcon icon={faScroll} />
                </Button>
              </a>
            </span>

          {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate sapiente atque veniam ducimus aliquid eaque eius illum asperiores nostrum perspiciatis, <br></br> voluptatem perferendis ea facere debitis possimus vel explicabo eum tenetur.</p> */}
        </div>
      </div>
      <br></br>

      <p>Or check a few contributions in the following companies.</p>
      <br></br>
      <br></br>
      <span className={aboutStyle.companies}>
        <Company data={tpData} language={Language} bg="techprojectBackground"/>
        <Company data={sirchData} language={Language} bg="sirchBackground"/>
        <Company data={petros} language={Language} bg="petrosBackground"/>
      </span>
    </div>
  )
}

export default About