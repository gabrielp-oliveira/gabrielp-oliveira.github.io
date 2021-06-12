import React, { useContext } from 'react'
import './home.css'
import home from '../../elements-Data/home/home'

import Waves from '../../assets/svg/waves/Waves'
import Dots from '../dots/Dots'

import NavHeader from '../navheader/navheader'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'


import { LanguageContext } from '../../context/languageContext'
function Header() {

    const { Language } = useContext(LanguageContext)

    return (
        <>
        <div id="Home">

            <NavHeader></NavHeader>

            <div id="Home-Content">


                <div className="intro">
                    <h1>Lorem ipsum dolor</h1>

                    <h2>{home[Language]}</h2>
                    <div className="social">
                        <span><FontAwesomeIcon icon={faGithub} /></span>
                        <span><FontAwesomeIcon icon={faCodepen} /></span>
                        <span><FontAwesomeIcon icon={faLinkedin} /></span>

                    </div>
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
