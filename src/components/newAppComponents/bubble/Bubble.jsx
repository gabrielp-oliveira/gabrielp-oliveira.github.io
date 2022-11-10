import React from 'react'
import './bubble.css'

function Bubble({ status, slow }) {
    return (
        <>

                {slow ? <div className='bubbleContainer' >
                    <div className="bubble small-slow"></div>
                    <div className="bubble s-medium-slow"></div>
                    <div className="bubble medium-slow"></div>
                    <div className="bubble large-slow"></div>
                    <div className="bubble small-l-slow"></div>
                </div> : <div className='bubbleContainer'> <div className="bubble small"></div>
                    <div className="bubble s-medium"></div>
                    <div className="bubble medium"></div>
                    <div className="bubble large"></div>
                    <div className="bubble small-l"></div></div>}



        </>
    )
}

export default Bubble