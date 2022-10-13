import React, { useState, useEffect, useContext } from 'react'
import navStyler from './nav.module.css'
import navheader from '../../../elements-Data/navheader/navheader'
import { LanguageContext } from '../../../context/languageContext'
import { VersionContext } from '../../../context/VersionContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faAnchor } from '@fortawesome/free-solid-svg-icons'
import Mountains from '../../../assets/mountains'
// import SideMenu from './sideMenu.jsx'


function NavHeader() {
    const { Language, SetLanguage } = useContext(LanguageContext)
    const { Version, SetVersion } = useContext(VersionContext)
    const [ outPutLanguage, SetOutPutLanguage ] = useState()

    const [Adjust, SetAdjust] = useState('Light')

    useEffect(() => {
        if(Version == 'old'){
            
            if (navigator.language === 'pt') {
                SetLanguage('pt')
                SetOutPutLanguage('eng')
            } else {
                SetLanguage('eng')
                SetOutPutLanguage('pt/br')
            }
            // adjustLight()
        }
    }, [])



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


    return (
        <div className={navStyler.navHeader_Container}>

        <div className={navStyler.navHeader}>
            <div className={navStyler.navBar}>
                <span> <a href="#Home">{navheader[Language].home}</a></span>
                <span> <a href="#about">{navheader[Language].about}</a></span>
                <span> <a href="#portfolio">{navheader[Language].portfolio}</a></span>
                <span> <a href="#contact">{navheader[Language].contact}</a> </span>
            </div>
            {/* <SideMenu/> */}

            <div className={navStyler.config} >


                <div className={navStyler.language} onClick={() => changelanguage()}>
                    <FontAwesomeIcon icon={faLanguage} />
                    <span>{outPutLanguage}</span>
                </div>

                <div className={navStyler.adjustIcon} onClick={e => changeVersion(e)} draggable="false">
                    {/* <FontAwesomeIcon icon={faAnchor} /> */}
                    <Mountains />
                </div>

            </div>
        </div> 

        </div>
    )
}

export default NavHeader
