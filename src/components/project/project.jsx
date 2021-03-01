import React, { useState ,useEffect, useContext} from 'react'
import './project.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faSearch} from '@fortawesome/free-solid-svg-icons'

import { LanguageContext } from '../../context/languageContext'

function Project({data}) {
    const { Language } = useContext(LanguageContext)
    const [feature, setFeature] = useState([])
    let cont = 0 

    
    return (
        <div className="proj">

            <div className="proj-info">
                <h3>{data.info.title}</h3>

                <img className="img" src={data.info.img} alt={data.info.title} />
                <div className="proj-buttons">
      
                    <a href={data.info.urls.visit}><button aria-label="Left Align"><FontAwesomeIcon icon={faDesktop}/></button></a>
                    <a href={data.info.urls.code}><button aria-label="Center Align"><FontAwesomeIcon icon={faGithub}/></button></a>
                    <a href={data.info.urls.details}><button aria-label="Right Align"><FontAwesomeIcon icon={faSearch}/></button></a>
                </div>

                <div>
                    {/* {data[Language].description} */}
                    {data[Language].function}
                </div>
            </div>
            {/* <div className="proj-description">
                <div >
                    <h3>{data[Language].headers[0]}</h3>
                    {data[Language].function}
                </div>
                <div >
                    <h3>{data[Language].headers[1]}</h3>
                    {data[Language].difficults}
                </div>
                <div >
                    <h3>{data[Language].headers[2]}</h3>
                    {data[Language].solution}

                </div>
                <div className="features">
                    <h3>{data[Language].headers[3]}</h3>
                    {data[Language].features}
                </div>
            </div> */}






        </div>
    )
}

export default Project
