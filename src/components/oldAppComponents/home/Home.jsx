import React, { useContext } from 'react'
import './home.css'
import home from '../../../elements-Data/home/home'
import navheader from '../../../elements-Data/navheader/navheader'

import Waves from '../../../assets/svg/waves/Waves'
import Dots from '../dots/Dots'

import NavHeader from '../navheader/navheader'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button } from "@material-ui/core";


import { LanguageContext } from '../../../context/languageContext'
function Header() {

    const { Language } = useContext(LanguageContext)



    return (
        <>
        <div id="Home">

            <NavHeader></NavHeader>

            <div className="Home-Content">


                <div className="intro">
                    <h1>Gabriel P. Oliveira</h1>

                    <h2>{home[Language]}</h2>
                    <div className="social">
                        <a href="https://github.com/gabrielp-oliveira" target="_blank" rel="noreferrer" ><span> <FontAwesomeIcon icon={faGithub} /></span></a>
                        <a href="https://www.linkedin.com/in/gabrielp-oliveira" target="_blank" rel="noreferrer" ><span> <FontAwesomeIcon icon={faLinkedin} /></span></a>
                    </div>
                    <Button variant="contained" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                  <a href="#portfolio" style={{color: 'white', fontWeight: '600', textDecoration: 'none'}}>{navheader[Language].portfolio}</a>
                </Button>
                </div>
                <div className="astro">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <Waves />
            <Dots />
        </div>
        <div className="transicao"></div>
        </>
    )
}

export default Header
