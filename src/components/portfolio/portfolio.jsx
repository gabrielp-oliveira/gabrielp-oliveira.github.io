import React, { useContext } from 'react'
import './portfolio.css'
import Project from '../project/project'
import WhatsAppClone from '../../../elements-Data/projects/WhatsAppClone'
import SpotifyClone from '../../../elements-Data/projects/spotifyClone'
import Sign from '../../../elements-Data/projects/sign'
import Planner from '../../../elements-Data/projects/planner'
import portfolio from '../../../elements-Data/portfolio/portfolio'

import { LanguageContext } from '../../../context/languageContext'

function Portfolio() {
    const { Language } = useContext(LanguageContext)

    return (

        <div id="portfolio">

            <div className="title-port">
                <h2 className="title">{portfolio[Language].title}</h2>
                <p className="subText">{portfolio[Language].subtext}</p>
            </div>

            <div className="projects">
                <Project data={Planner} />
                <Project data={SpotifyClone} /> 
                <Project data={Sign} /> 
                <Project data={WhatsAppClone} />
            </div>
        </div>
    )
}

export default Portfolio
