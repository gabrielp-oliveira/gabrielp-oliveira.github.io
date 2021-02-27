import React, {useContext } from 'react'
import './portfolio.css'
import Project from '../project/project'
import proj1Data from '../../elements-Data/projects/proj1'
import SpotifyClone from '../../elements-Data/projects/spotifyClone'

import Tilt from '../../assets/svg/tilt/Tilt'
import TiltTop from '../../assets/svg/tiltTop/tiltTop'
import portfolio from '../../elements-Data/portfolio/portfolio'

import { LanguageContext } from '../../context/languageContext'

function Portfolio() {
    const { Language } = useContext(LanguageContext)

    return (

        <div className="portfolio">
            <TiltTop/>
            <div className="title-port">
                <h4>{portfolio[Language].title}</h4>
                <p>{portfolio[Language].subtext}</p>
            </div>

            <div className="projects">
                <Project data={SpotifyClone} />
                <Project data={proj1Data} />
                <Project data={SpotifyClone} />
            </div>
            <Tilt></Tilt>
        </div>
    )
}

export default Portfolio
