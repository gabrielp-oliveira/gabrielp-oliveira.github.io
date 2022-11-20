import React, { useState, useEffect, useContext } from 'react'
import './navheader.css'
import navheader from '../../../elements-Data/navheader/navheader'
import { LanguageContext } from '../../../context/languageContext'
import { VersionContext } from '../../../context/VersionContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faLanguage, faAnchor } from '@fortawesome/free-solid-svg-icons'

import SideMenu from './sideMenu.jsx'


function NavHeader() {
    const { Language, SetLanguage } = useContext(LanguageContext)
    const { Version, SetVersion } = useContext(VersionContext)
    const [ outPutLanguage, SetOutPutLanguage ] = useState()

    const [Adjust, SetAdjust] = useState('Light')

    useEffect(() => {

        adjustLight()
        if (navigator.language === 'pt') {
            SetLanguage('pt')
            SetOutPutLanguage('eng')
        } else {
            SetLanguage('eng')
            SetOutPutLanguage('pt/br')
        }
    }, [])


    function adjustLight() {
        if(Version == 'old'){
        const home = document.querySelector('#Home')
        const root = document.documentElement
        const astro = document.querySelector('.astro')
        const icon = document.querySelector('.adjustIcon')
        const form = document.querySelector('.form')
        const bodyConteiner = document.querySelector('.body-conteiner')
        const transition = document.querySelector('.transicao')

        if (Adjust === 'Dark') {
            astro.childNodes.forEach(el => {
                el.style.display = 'none'
            })
            astro.style.height = '20rem'
            astro.style.width = '20rem'
            astro.style.backgroundColor = 'rgb(243, 175, 148)'

            root.style.cssText = "--Body: rgb(255, 255, 255)";
            home.style.background = "linear-gradient(135deg, rgba(238,174,212,1) 0%, rgba(116,116,221,1) 100%)";
            icon.style.filter = 'none'
            form.style.background = 'rgb(0, 0, 0, 0.2)'
            bodyConteiner.style.background = 'rgb(0, 0, 0, 0.2)'
            transition.style.background = 'linear-gradient(0deg, rgb(255,255,255) 0%, var(--Dark) 100%)'
            SetAdjust('Light')
            
            if(window.screen.width >= 850){
                astro.style.top = '4%'
                astro.style.left = '3%'
            }else{
                astro.style.top = '1%'
                astro.style.left = '-3%'
            }
        } else {
            astro.childNodes.forEach(el => {
                el.style.display = 'block'
            })
            astro.style.height = '16.5rem'
            astro.style.width = '16.5rem'
            astro.style.backgroundColor = 'rgb(240,240,240)'
            root.style.cssText = "--Dark: rgb(5, 0, 32)";
            home.style.background = "linear-gradient(190deg, rgb(52, 11, 68) -20%, rgb(2, 53, 63) 100%)";
            icon.style.filter = 'invert()'
            form.style.background = 'rgb(255, 255, 255, 0.1)'
            bodyConteiner.style.background = 'rgb(255, 255, 255, 0.02)'
            transition.style.background = ' linear-gradient(0deg, rgb(5, 5, 5) 20%, var(--Dark)100%)'
            SetAdjust('Dark')
            if(window.screen.width >= 850){
                astro.style.top = '10%'
                astro.style.left = '72%'
            }else{
                astro.style.top = '10%'
                astro.style.left = '54%'
            }
        }
    }
    }

    function changelanguage() {

        if (Language === 'pt') {
            SetLanguage('eng')
            SetOutPutLanguage('pt/br')
        } else {
            SetLanguage('pt')
            SetOutPutLanguage('eng')
        }
    }
    function changeVersion(){
        SetVersion(Version === 'new' ? 'old': 'new')
    }

    // window.addEventListener('resize',(e) => {
    //     if(Version == 'old'){
    //     console.log('...')
    //     const astro = document.querySelector('.astro')
    //     if(e.target.innerWidth >= 850){
    //         if (Adjust === 'Dark') {
    //             astro?.style.top = '10%'
    //             astro?.style.left = '72%'
    //         }else{
    //             astro?.style.top = '4%'
    //             astro?.style.left = '3%'
    //         }
    //     }else{
    //         if (Adjust === 'Dark') {
    //             astro?.style.top = '10%'
    //             astro?.style.left = '54%'
    //         }else{
    //             astro?.style.top = '1%'
    //             astro?.style.left = '-3%'
    //         }
    //     }
    //     }
    // })


    return (
        <div className="navHeader-Container">

        <div className="navHeader">
            <div className="navBar">
                <span> <a href="#Home">{navheader[Language].home}</a></span>
                <span> <a href="#about">{navheader[Language].about}</a></span>
                <span> <a href="#portfolio">{navheader[Language].portfolio}</a></span>
                <span> <a href="#contact">{navheader[Language].contact}</a> </span>
            </div>
            <SideMenu/>

            <div className="config" >


                <div className="language" onClick={() => changelanguage()}>
                    <FontAwesomeIcon icon={faLanguage} />
                    <span>{outPutLanguage}</span>
                </div>
                <div className="adjustIcon" onClick={e => adjustLight(e)} draggable="false">
                    <FontAwesomeIcon icon={faLightbulb} />
                </div>
                <div className="New" onClick={e => changeVersion(e)} draggable="false">
                    <FontAwesomeIcon icon={faAnchor} />
                </div>

            </div>
        </div> 

        </div>
    )
}

export default NavHeader
