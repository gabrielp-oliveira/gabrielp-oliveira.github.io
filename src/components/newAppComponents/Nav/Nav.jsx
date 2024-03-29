import React, { useState, useEffect, useContext } from 'react'
import navStyler from './nav.module.css'
import navheader from '../../../elements-Data/navheader/navheader'
import { LanguageContext } from '../../../context/languageContext'
import { VersionContext } from '../../../context/VersionContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faAnchor } from '@fortawesome/free-solid-svg-icons'
import Mountains from '../../../assets/mountains'
import SideMenu from './sideMenu.jsx'
import homeStyle from '../Home/home.module.css'
import aboutStyle from '../About/about.module.css'
import contactStyle from '../contact/contact.module.css'


function NavHeader() {
    const { Language, SetLanguage } = useContext(LanguageContext)
    const { Version, SetVersion } = useContext(VersionContext)
    const [ outPutLanguage, SetOutPutLanguage ] = useState()

    const [Adjust, SetAdjust] = useState('Light')




    function changelanguage() {

        if (Language === 'pt') {
            SetLanguage('eng')
        } else {
            SetLanguage('pt')
        }
    }
    function changeVersion(){
        SetVersion(Version === 'new' ? 'old': 'new')
    }


    return (
        <div className={navStyler.navHeader_Container}>

        <div className={navStyler.navHeader}>
            <div className={navStyler.navBar}>
                <span> <a href={"#"+homeStyle.Home}>{navheader[Language].home}</a></span>
                <span> <a href={"#"+aboutStyle.About}>{navheader[Language].about}</a></span>
                {/* <span> <a href={}">{navheader[Language].portfolio}</a></span> */}
                <span> <a href={"#"+contactStyle.Contact}>{navheader[Language].contact}</a> </span>
            </div>
            <SideMenu/>

            <div className={navStyler.config} >


                <div className={navStyler.language} onClick={() => changelanguage()}>
                    <FontAwesomeIcon icon={faLanguage} />
                    <span>{Language}</span>
                </div>

                <div className={navStyler.language} onClick={e => changeVersion(e)} draggable="false">
                    {/* <FontAwesomeIcon icon={faAnchor} /> */}
                    <Mountains />
                    <span>{navheader[Language].version}</span>
                </div>

            </div>
        </div> 

        </div>
    )
}

export default NavHeader
