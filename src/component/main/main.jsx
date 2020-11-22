import React, { useState, useEffect } from 'react';
import Home from './home/home'
import About from './about/about'
import Resume from './resume/resume'
import Contact from './contact/contact'
import Projects from './projects/projects'

function Main() {
    const [content, setContent] = useState(<Projects></Projects>);

    useEffect(() => {

        let navigation = document.querySelectorAll('.navigation li')
        navigation.forEach((element) => {
            element.onclick = function (e) {
                if (e.target.innerHTML === 'About') {
                    transition(content, <About></About>)
                } else if (e.target.innerHTML === 'Projects') {
                    transition(content, <Projects></Projects>)

                } else if (e.target.innerHTML === 'Resume') {
                    transition(content, <Resume></Resume>)

                } else if (e.target.innerHTML === 'Contact') {
                    transition(content, <Contact></Contact>)

                } else if (e.target.innerHTML === 'Home') {
                    transition(content, <Home></Home>)

                }
            }
        })

    }, [content])

    function transition(before, after) {
        if (before.type.name !== after.type.name) {
            document.querySelector(`.${content.type.name}`).style.opacity = '0'
            document.querySelector(`.${content.type.name}`).style.transition = 'all 150ms'

            setTimeout(() => {

                setContent(after)
                document.querySelector(`.${after.type.name}`).style.opacity = '0'
                console.log(after.type.name)
                setTimeout(() => {
                    document.querySelector(`.${after.type.name}`).style.opacity = '1'
                    document.querySelector(`.${after.type.name}`).style.transition = 'all 150ms'

                }, 150)
            }, 150)
        }
    }

    // document.querySelector('body').onload = function () {
    //     let timer = 56
    //     setInterval(() => {
    //         timer = timer + 1
    //         document.querySelector('body').style.background = `linear-gradient(${timer}deg, rgb(0, 15, 25) 0%, rgba(0,0,0,1) 50%, rgb(22, 3, 0) 100%)`
    //         if (timer >= 359) {
    //             timer = 0
    //         }

    //         document.querySelector('body').style.backgroundRepeat = 'no-repeat'
    //         document.querySelector('body').style.backgroundSize = 'cover'
    //         document.querySelector('body').style.backgroundPosition = 'center'
    //         document.querySelector('body').style.backgroundAttachment = 'fixed'
    //     }, 100);
    // }

    return (
        <main id="main" className="container-fluid">
            {content}
        </main>
    );
}

export default Main