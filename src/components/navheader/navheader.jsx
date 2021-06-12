import React, { useState, useEffect, useContext } from 'react'
import './navheader.css'
import navheader from '../../elements-Data/navheader/navheader'
import { LanguageContext } from '../../context/languageContext'

import Brasil from '../../assets/imgs/brasil.webp'
import Usa from '../../assets/imgs/usa.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

import Sandwich from './Sandwich'

function NavHeader() {
    const { Language, SetLanguage } = useContext(LanguageContext)
    const [Flag, SetFlag] = useState()
    const [Adjust, SetAdjust] = useState('Light')

    useEffect(() => {
        if (navigator.language === 'pt') {
            SetFlag(<img draggable="false" src={Usa} alt="Usa flag" value="eng" />)
            SetLanguage('pt')
        } else {
            SetLanguage('eng')
            SetFlag(<img draggable="false" src={Brasil} alt="brasil flag" value="pt" />)
        }
        adjustLight()
    }, [])


    function adjustLight() {
        const home = document.querySelector('#Home')
        const root = document.documentElement
        const icon = document.querySelector('.adjustIcon')
        const form = document.querySelector('.form')
        const bodyConteiner = document.querySelector('.body-conteiner')
        const transition = document.querySelector('.transicao')

        if (Adjust === 'Dark') {
            root.style.cssText = "--Dark: rgb(133, 96, 2)";
            root.style.cssText = "--Body: rgb(255, 255, 255)";
            home.style.background = "linear-gradient(135deg, rgba(238,174,212,1) 0%, rgba(116,116,221,1) 100%)";
            icon.style.filter = 'none'
            form.style.background = 'rgb(0, 0, 0, 0.2)'
            bodyConteiner.style.background = 'rgb(0, 0, 0, 0.2)'
            transition.style.background = 'linear-gradient(0deg, rgb(255,255,255) 20%, var(--Dark) 100%)'
            SetAdjust('Light')
        } else {
            root.style.cssText = "--Dark: rgb(5, 0, 32)";

            home.style.background = "linear-gradient(190deg, rgb(52, 11, 68) 35%, rgb(2, 53, 63) 100%)";
            icon.style.filter = 'invert()'
            form.style.background = 'rgb(255, 255, 255, 0.1)'
            bodyConteiner.style.background = 'rgb(255, 255, 255, 0.02)'
            transition.style.background = ' linear-gradient(0deg, rgb(5, 5, 5) 20%, var(--Dark)100%)'
            SetAdjust('Dark')

        }

    }

    function changelanguage() {

        if (Flag.props.value === 'pt') {
            SetFlag(<img draggable="false" src={Usa} alt="Usa flag" value="eng" />)
            SetLanguage(Flag.props.value)
        } else {
            SetFlag(<img draggable="false" src={Brasil} alt="brasil flag" value="pt" />)
            SetLanguage(Flag.props.value)
        }
        console.log(navheader[Language])
    }

    return (
        <div className="navHeader">
            <div className="navBar">
                <span> <a href="#Home">{navheader[Language].home}</a></span>
                <span> <a href="#about-conteiner">{navheader[Language].about}</a></span>
                <span> <a href="#portfolio">{navheader[Language].portfolio}</a></span>
                <span><a href="#contact">{navheader[Language].contact}</a> </span>
            </div>
                <Sandwich/>

            <div className="config" >


                <div className="flag" onClick={() => changelanguage()}>
                    {Flag}
                </div>
                <div className="adjustIcon" onClick={e => adjustLight(e)} draggable="false">
                    <FontAwesomeIcon icon={faAdjust} />
                </div>

            </div>

        </div>
    )
}

export default NavHeader
