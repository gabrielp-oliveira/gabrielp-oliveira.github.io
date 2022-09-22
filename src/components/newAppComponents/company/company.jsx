import React from 'react'
import companyStyle from './company.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";



function company({ data, language, bg }) {
    return (
        <div className={companyStyle.card}>
            <div className={`${companyStyle.cardTop} ${companyStyle[bg]}`}>
                <img src={data.info.img} height='80px' width='105px'></img>
            </div>

            <div className={companyStyle.cardBottom}>
                <p>{data[language].textTop}</p>
                <p>{data[language].text}</p>
                <p className={companyStyle.date}>{data[language].date}</p>
                <div className={companyStyle.access}>
                    <a target='_blank' href={data.info.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a target='_blank' href={data.info.website}><FontAwesomeIcon icon={faLaptop} /></a>

                </div>
            </div>
        </div>
    )
}

export default company