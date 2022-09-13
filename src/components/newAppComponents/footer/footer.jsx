import React, { useContext } from 'react';
import "./footer.css";

import { LanguageContext } from '../../../context/languageContext'
import footer from '../../../elements-Data/footer/footer'

import Ship from '../../../assets/ship';
import Bubble from '../bubble/Bubble';

function Footer() {
    const { Language } = useContext(LanguageContext)

    return (
        <>
            <div className="ship">
                <Bubble slow={true} />
                <Ship color='white' height='150px' width='150px' />
            </div>
        <footer className='footerNew'>
            <div className="box">
                <span>©2021 - {footer[Language].footer} </span>
            </div>
        </footer>
        </>
    )
}

export default Footer
