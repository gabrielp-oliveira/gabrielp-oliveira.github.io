import React, { useState, useEffect, useContext } from 'react'
import './about.css'
import about from '../../elements-Data/about/about'
import TiltTop from '../../assets/svg/tiltTop/tiltTop'
import { LanguageContext } from '../../context/languageContext'


function About() {
    const { Language } = useContext(LanguageContext)
    const [frontKnowledge, setFrontKnowledge] = useState([])
    const [backKnowledge, setBackKnowledge] = useState([])


    // useEffect(() => {
    //     setFrontKnowledge([])
    //     setBackKnowledge([])
    //     about[Language].back_knowledge_content.forEach(element => {
    //         setFrontKnowledge(oldarray => [...oldarray, <span key={element}>{element}</span>])
    //     });
    //     about[Language].front_knowledge_content.forEach(element => {
    //         setBackKnowledge(oldarray => [...oldarray, <span key={element}>{element}</span>])
    //     });
    // }, [Language])

    function enter(e) {
        const target = e.target
        const Container = e.target.closest('.conteiner-red')
        if (e.target.className == 'front' || e.target.className == 'back') {
            target.style.transform = 'rotateZ(-10deg)'
            Container.style.transform = 'rotateZ(10deg)'
        }
    }
    function leave(e) {
        const target = e.target
        const Container = e.target.closest('.conteiner-red')
        if (e.target.className == 'front' || e.target.className == 'back') {
            target.style.transform = 'rotateZ(-2deg)'
            Container.style.transform = 'rotateZ(2deg)'
        }
    }


    return (
        <>
            <div className="about-conteiner">
                {/* <h4>{about[Language].about_text}</h4> */}
                <h4>About</h4>
                <div className="about">


                        <p>{about[Language].about_text}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam harum, dolorem ad ratione ipsam porro mollitia repellendus magni, commodi dolor obcaecati? </p>


                        <p>{about[Language].about_sub_text}</p>
                        <p>commodi dolor obcaecati? Magnam quo explicabo repudiandae aperiam dignissimos</p>

                        <span className="resume">
                            {about[Language].button}
                        </span>

                </div>



                <div>


                    <div className="skills">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, maxime dolorum ullam consectetur necessitatibus deleniti repellat magnam expedita</p>
                        <div>
                                <span>Html 5</span>
                                <span>CSS 3</span>
                                <span>Bootstrap</span>
                                <span>JavaScript</span>
                                <span>Node JS</span>
                                <span>React Js</span>
                        </div>
                    </div>
                    {/* <div className="knowledge">

                        <div className="conteiner-red">
                            <div
                                className="front"
                                onPointerEnter={(e) => enter(e)}
                                onPointerLeave={(e) => leave(e)}>


                                <div className="knowledge-title">
                                    <h2>Front</h2>
                                    <div><div className="img1"></div></div>
                                </div>
                                <div className="knowledge-content">{frontKnowledge}</div>
                            </div>
                        </div>
                        <div className="conteiner-red blue">
                            <div className="back"
                                onPointerEnter={(e) => enter(e)}
                                onPointerLeave={(e) => leave(e)}
                            >
                                <div className="knowledge-title">
                                    <h2>Back</h2>
                                    <div><div className="img1"></div></div>
                                </div>
                                <div className="knowledge-content">{backKnowledge}</div>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <Triangule /> */}
            </div>
        </>
    )
}

export default About
