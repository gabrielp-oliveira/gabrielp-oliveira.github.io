import React, { useRef, useContext, useState, useEffect } from 'react'
import './nav.css'
import Drip from '../Home/Drip'
import navheader from '../../../elements-Data/navheader/navheader';
import { LanguageContext } from '../../../context/languageContext';
import { VersionContext } from '../../../context/VersionContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faLanguage, faAddressCard, faHome, faUserAlt, faNewspaper, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select, { SelectChangeEvent } from '@material-ui/core/Select';

function Nav() {
    const { Language, SetLanguage } = useContext(LanguageContext)
    const { Version, SetVersion } = useContext(VersionContext)
    const [outPutLanguage, SetOutPutLanguage] = useState()
    useEffect(() => {

        if (navigator.language === 'pt') {
            SetLanguage('pt')
            SetOutPutLanguage('eng')
        } else {
            SetLanguage('eng')
            SetOutPutLanguage('pt/br')
        }
        adjustLight()
    }, [])

    function adjustLight() {

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
    function changeVersion(a) {

        console.log(Version)
        SetVersion(Version === 'new' ? 'old' : 'new')
    }
    return (
        <div>

            <div className="newNav">
                <div className="navBar">
                    {/* <span> <a href="#Home">{navheader[Language].home}</a></span> */}
                    <span> <a href="#Home"><FontAwesomeIcon icon={faHome} /></a></span>
                    {/* <span> <a href="#about">{navheader[Language].about}</a></span> */}
                    <span> <a href="#Home"><FontAwesomeIcon icon={faUserAlt} /></a></span>
                    {/* <span> <a href="#portfolio">{navheader[Language].portfolio}</a></span> */}
                    <span> <a href="#Home"><FontAwesomeIcon icon={faNewspaper} /></a></span>
                    {/* <span> <a href="#contact">{navheader[Language].contact}</a> </span> */}
                    <span> <a href="#Home"><FontAwesomeIcon icon={faPaperPlane} /></a></span>

                    <div className="config" >


                        {/* <div className="language" >
                            <div className="language" onClick={(e) => changelanguage(e)}>
                                <FontAwesomeIcon icon={faLanguage} />
                            </div>
                            <span>{outPutLanguage}</span>
                        </div> */}

                        <FormControl fullWidth>
                            <InputLabel id="" style={{color: 'white'}}>{Language}</InputLabel>
                            <Select
                                labelId=""
                                id="demo-simple-select"
                                value={outPutLanguage}
                                label="Age"
                                onChange={(e) => changelanguage(e)} style={{color: 'white'}} >
                                <MenuItem value={'pt-br'}>Pt-Br</MenuItem>
                                <MenuItem value={'eng'}>Eng</MenuItem>
                            </Select>
                        </FormControl>

                        <div className="adjustIcon" >
                            <div className="adjustIcon" onClick={e => adjustLight(e)} draggable="false">
                                <FontAwesomeIcon icon={faLightbulb} />
                            </div>
                        </div>
                        <div className="adjustIcon" >
                            <div className="adjustIcon" onClick={e => changeVersion()} draggable="false">
                                <FontAwesomeIcon icon={faAddressCard} />
                            </div>
                        </div>

                    </div>
                </div>
                {/* <SideMenu /> */}
                <Drip id={'navDrip'}></Drip>
            </div>
        </div>
    )
}

export default Nav