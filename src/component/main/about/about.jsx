import React from 'react'
import '../about/about.css'

function about() {

    return (
        <div className="about sign">
            <div id="skills">
                <div class="conhecimentos">

                    <div id="front">
                        <div>
                            <i class="fa fa-laptop flicker" aria-hidden="true"></i>
                        </div>

                        <span>HTML 5 </span>
                        <span>CSS 3</span>
                        <span>JavaScript</span>
                        <span>Bootstrap</span>
                        <span>React JS</span>
                    </div>

                    <div id="back">
                        <div>
                            <i class="fa fa-database flicker" aria-hidden="true"></i>
                        </div>

                        <span>Node JS</span>
                        <span>MYSQL</span>
                        <span>Express</span>
                    </div>
                </div>

            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolor, vero saepe nobis architecto deserunt</p>
        </div>
    )
}

export default about