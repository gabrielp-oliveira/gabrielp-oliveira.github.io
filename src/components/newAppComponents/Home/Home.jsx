import React, {  useContext } from 'react'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button } from "@material-ui/core";
import DarkWaves from "../../../assets/svg/DarkWaves/DarkWaves";
import Sky from '../sky/Sky';
import { LanguageContext } from '../../../context/languageContext';
import Nav from '../Nav/Nav'
import home from '../../../elements-Data/home/home'
import Drip from './Drip';

function Home({name}) {
  const { Language, SetLanguage } = useContext(LanguageContext)




  return (
      <div id="Home">
        <Nav></Nav>
        <div className="Home-Content">


          <div className='newIntro'>
            <div>
              <h1>Gabriel Oliveira</h1>
              <h2>{home[Language]}</h2>
              <div className="social">
                <a href="https://github.com/gabrielp-oliveira" target="_blank" rel="noreferrer" ><span> <FontAwesomeIcon icon={faGithub} /></span></a>
                <a href="https://www.linkedin.com/in/gabrielp-oliveira" target="_blank" rel="noreferrer" ><span> <FontAwesomeIcon icon={faLinkedin} /></span></a>
              </div>
              <Button variant="contained" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <a href="#portfolio" style={{ color: 'white', fontWeight: '600', textDecoration: 'none' }}>portfolio</a>
              </Button>

            </div>

            <Drip id="dripHome" />

          </div>

        </div>
        <div className='background'>
          <Sky />
          <DarkWaves />

        </div>
      </div>
  )
}

export default Home