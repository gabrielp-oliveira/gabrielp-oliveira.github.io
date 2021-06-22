import React, { useContext } from 'react'
import './portfolio.css'
import Project from '../project/project'
// import proj1Data from '../../elements-Data/projects/proj1'
import WhatsAppClone from '../../elements-Data/projects/WhatsAppClone'
import SpotifyClone from '../../elements-Data/projects/spotifyClone'
import Sign from '../../elements-Data/projects/sign'
import portfolio from '../../elements-Data/portfolio/portfolio'

import { LanguageContext } from '../../context/languageContext'

function Portfolio() {
    const { Language } = useContext(LanguageContext)

    return (

        <div id="portfolio">

            <div className="title-port">
                <h2 className="title">{portfolio[Language].title}</h2>
                <p className="subText">{portfolio[Language].subtext}</p>
            </div>

            <div className="projects">
                <Project data={Sign} /> 
                <Project data={SpotifyClone} /> 
                <Project data={WhatsAppClone} />
                {/* <Project data={proj1Data} /> */}
            </div>
        </div>
    )
}

export default Portfolio
