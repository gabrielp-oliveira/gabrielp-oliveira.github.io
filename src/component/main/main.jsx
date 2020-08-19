import React, { useState, useEffect } from 'react';
import Home from './home/home'
import About from './about/about'
import Resume from './resume/resume'
import Contact from './contact/contact'
import Projects from './projects/projects'

function Main() {
    const [content, setContent] = useState(<Home></Home>);

    useEffect(() => {

        let navigation = document.querySelectorAll('.navigation div')
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
            if (document.querySelector('body').clientHeight >= 640) {
                if (after.type.name !== 'home') {

                    document.querySelector('.social').style.bottom = '0%'
                    document.querySelector('.social').style.transition = 'all 1500ms'
                }else {
                    document.querySelector('.social').style.bottom = '200px'
                    document.querySelector('.social').style.transition = 'all 1500ms'
                }
            }
            document.querySelector(`.${content.type.name}`).style.opacity = '0'
            document.querySelector(`.${content.type.name}`).style.transition = 'all 100ms'

            setTimeout(() => {

                setContent(after)
                document.querySelector(`.${after.type.name}`).style.opacity = '0'
                console.log(after.type.name)
                setTimeout(() => {
                    document.querySelector(`.${after.type.name}`).style.opacity = '1'
                    document.querySelector(`.${after.type.name}`).style.transition = 'all 100ms'

                }, 100)
            }, 100)
        }
    }

    return (
        <main id="main" className="container-fluid">
            {content}
        </main>
    );
}

export default Main