import React,{ useContext } from 'react';
import "./footer.css";

import { LanguageContext } from '../../../context/languageContext'
import footer from '../../../elements-Data/footer/footer'

function Footer() {
    const { Language } = useContext(LanguageContext)

    return (
        <footer>
            <div className="box">
                <span>©2021 - {footer[Language].footer} </span>
            </div>
        </footer>
    )
}

export default Footer
