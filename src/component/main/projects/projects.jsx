import React from 'react'
import '../projects/projects.css'
import memory_img from '../imgs/img-2.png'
import chat_img from '../imgs/chat-img.png'


function projects() {

    return (
        <div className="projects">
            <div className="d-flex flex-wrap justify-content-center">
                <div className="projeto">
                    <img src={memory_img} alt="" />
                    <div className="desc">
                        <h3>Projeto 1</h3>
                        <h5>isso isso e aquilo outro</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit aperiam maxime maiores iure, magnam reiciendis recusandae voluptatibus quia rerum facilis deserunt animi minus a, ex quas, assumenda debitis dignissimos.</p>

                    </div>
                    <div className="buttons">
                        <a className="btn btn-primary fa fa-github" rel="noreferrer" target="_blank" href="https://github.com/Biel-97/Memory-game-React"></a>
                        <a className="btn btn-primary" rel="noreferrer" target="_blank" href="https://biel-97.github.io/Memory-game-React/">Projeto</a>
                    </div>
                </div>
                <div className="projeto">
                    <img src={chat_img} alt="" />
                    <div className="desc">

                        <h3>Projeto 2</h3>
                        <h5>isso isso e aquilo outro</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo impedit aperiam maxime maiores iure, magnam reiciendis recusandae voluptatibus quia rerum facilis deserunt animi minus a, ex quas, assumenda debitis dignissimos.</p>
                    </div>
                    <div className="buttons">
                        <a className="btn btn-primary fa fa-github" rel="noreferrer" target="_blank" href="https://github.com/Biel-97/Chat-App"></a>
                        <a className="btn btn-primary" rel="noreferrer" target="_blank" href="https://biel-97.github.io/Chat-App/#/">Projeto</a>
                    </div>
                </div>

            </div>
            <span className="align-self-center mt-2"> Mais projetos disponiveis em Github e Codepen</span>
        </div>
    )
}

export default projects