import React, { useContext } from "react";
import img from "../../assets/svg/imagem.svg";
import "./about.css";
import about from "../../elements-Data/about/about";
import { LanguageContext } from "../../context/languageContext";
import { Button } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faAngular,
  faReact,
  faHtml5,
  faNode,
  faJs,
  faJava
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const { Language } = useContext(LanguageContext);

  return (
    <>
      <div id="about-conteiner">
        {/* <h4>{about[Language].about_text}</h4> */}
        <h2 className="title">{about[Language].about}</h2>
        <div className="aboutBody">
          <div>
            <img src={img} alt="" width="350" className="iconAbout" />
          </div>
          <div className="about">
            
            <p className="subText">{about[Language].about_text}<br></br>
           {about[Language].about_sub_text}</p>


            <span className="resume">
              <Button variant="contained" color="secondary">
                {about[Language].button}
              </Button>
            </span>
          </div>
        </div>
        <div className="knowledge">
            <span><FontAwesomeIcon icon={faReact} />React Js</span>
            <span><FontAwesomeIcon icon={faAngular} />Angular</span>

            <span><FontAwesomeIcon icon={faHtml5} />HTML 5</span>
            <span><FontAwesomeIcon icon={faJs} />Java Scvript</span>
            <span><FontAwesomeIcon icon={faCss3Alt} />Css 3</span>
            <span><FontAwesomeIcon icon={faNode} />Node Js</span>
            <span><FontAwesomeIcon icon={faJava} />Java</span>
        </div>
      </div>
    </>
  );
}

export default About;
