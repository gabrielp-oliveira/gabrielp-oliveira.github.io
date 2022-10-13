import React, { useState } from 'react'
import companyStyle from './company.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

import Modal from './modal'

function Company({ data, language, bg }) {

    const [open, setOpen] = useState(false)
    return (
        <>
        <div className={companyStyle.card} onClick={() => setOpen(!open)}>
            <div className={`${companyStyle.cardTop} ${companyStyle[bg]}`}>
                <img src={data.info.img} height='110px' width='110px'></img>
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
        <Modal open={open} setOpen={setOpen} data={data} bg={companyStyle[bg]} language={language}/>
        </>
    )
}

export default Company