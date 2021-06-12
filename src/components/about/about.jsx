import React, { useContext } from 'react'
import img from '../../assets/svg/imagem.svg'
import './about.css'
import about from '../../elements-Data/about/about'
import { LanguageContext } from '../../context/languageContext'
import { Button } from '@material-ui/core';


function About() {
    const { Language } = useContext(LanguageContext)
    
    return (
        <>
            <div id="about-conteiner">
              {/* <h4>{about[Language].about_text}</h4> */}
              <h2>About</h2>
              <div className="aboutBody">
                <div><img src={img} alt="" width="350"/></div>
                <div className="about">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam harum, dolorem ad ratione ipsam porro mollitia
                    repellendus magni, commodi dolor obcaecati?
                  </p>
                  <p>
                    commodi dolor obcaecati? Magnam quo explicabo repudiandae aperiam
                    dignissimos
                  </p>

                      <span className="resume">
                        <Button variant="contained" color='secondary'>
                            {about[Language].button}
                          </Button>
                        </span>

                </div>
              </div>


            </div>
        </>
    )
}

export default About
