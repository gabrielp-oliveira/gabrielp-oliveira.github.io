import React, {useContext } from 'react'
import './portfolio.css'
import Project from '../project/project'
import proj1Data from '../../elements-Data/projects/proj1'
import proj2Data from '../../elements-Data/projects/proj2'
import SpotifyClone from '../../elements-Data/projects/spotifyClone'
import Sign from '../../elements-Data/projects/sign'
import portfolio from '../../elements-Data/portfolio/portfolio'

import { LanguageContext } from '../../context/languageContext'

function Portfolio() {
    const { Language } = useContext(LanguageContext)

    return (

        <div id="portfolio">

            <div className="title-port">
                <h2>{portfolio[Language].title}</h2>
                <p>{portfolio[Language].subtext}</p>
            </div>

            <div className="projects">
                <Project data={Sign} /> 
                <Project data={SpotifyClone} /> 
                <Project data={proj2Data} />
                <Project data={proj1Data} />
            </div>
        </div>
    )
}

export default Portfolio
