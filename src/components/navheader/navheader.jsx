import React, { useState, useEffect, useContext } from 'react'
import './navheader.css'
import navheader from '../../elements-Data/navheader/navheader'
import { LanguageContext } from '../../context/languageContext'

import Brasil from '../../assets/imgs/brasil.webp'
import Usa from '../../assets/imgs/usa.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faBars } from '@fortawesome/free-solid-svg-icons'


function NavHeader() {
    const { Language, SetLanguage } = useContext(LanguageContext)
    const [Flag, SetFlag] = useState()
    const [Adjust, SetAdjust] = useState('Light')

    useEffect(() => {
        if (navigator.language == 'pt') {
            SetFlag(<img draggable="false" src={Usa} alt="Usa flag" value="eng" />)
            SetLanguage('pt')
        } else {
            SetLanguage('eng')
            SetFlag(<img draggable="false" src={Brasil} alt="brasil flag" value="pt" />)
        }
        adjustLight()
    }, [])

    function adjustLight() {
        const home = document.querySelector('.Home')
        const root = document.documentElement
        const icon = document.querySelector('.adjustIcon')
        const form = document.querySelector('.form')
        const portfolio = document.querySelector('.portfolio')

        if (Adjust == 'Dark') {
            root.style.cssText = "--Dark: rgb(133, 96, 2)";
            home.style.background = "linear-gradient(135deg, rgba(238,174,212,1) 0%, rgba(116,116,221,1) 100%)";
            SetAdjust('Light')
            icon.style.filter = 'none'
            form.style.background = 'rgb(0, 0, 0, 0.4)'
            portfolio.style.background = 'rgba(0,98,96,1)'
        } else {
            home.style.background = "linear-gradient(190deg, rgb(52, 11, 68) 35%, rgb(2, 53, 63) 100%)";
            root.style.cssText = "--Dark: rgb(5, 0, 32)";
            SetAdjust('Dark')
            icon.style.filter = 'invert()'
            form.style.background = 'rgb(255, 255, 255, 0.2)'
            portfolio.style.background = 'radial-gradient(circle, rgba(0,58,59,1) 0%, rgba(0,25,29,1) 100%)'

        }

    }

    function changelanguage() {

        if (Flag.props.value == 'pt') {
            SetFlag(<img draggable="false" src={Usa} alt="Usa flag" value="eng" />)
            SetLanguage(Flag.props.value)
        } else {
            SetFlag(<img draggable="false" src={Brasil} alt="brasil flag" value="pt" />)
            SetLanguage(Flag.props.value)
        }
    }

    return (
        <div className="navHeader">
            <div className="navBar">
                <span>{navheader[Language].home}</span>
                <span>{navheader[Language].about}</span>
                <span>{navheader[Language].portfolio}</span>
                <span>{navheader[Language].contact}</span>
            </div>
            <div className="bars">
                <FontAwesomeIcon icon={faBars}/>
            </div>

            <div className="config" draggable="false">


                <div className="flag" onClick={() => changelanguage()}>
                    {Flag}
                </div>
                <div className="adjustIcon" onClick={e => adjustLight(e)}>
                    <FontAwesomeIcon icon={faAdjust} />
                </div>

            </div>

        </div>
    )
}

export default NavHeader
