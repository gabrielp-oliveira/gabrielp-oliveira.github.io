import React from 'react'
import '../home/home.css'
import Flag from '../../flag/flag'

function home() {
    return (
        <>
            <div className="home">
                <h1 className="nome mb-3">Gabriel P. Oliveira</h1>
                <h3 className="sub align-self-center"> Full Stack Developer </h3>
            </div>
            <Flag></Flag>
        </>
    )
}

export default home