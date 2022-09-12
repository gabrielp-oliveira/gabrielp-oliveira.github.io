import React from 'react'
import Bubble from '../bubble/Bubble'
import './about.css'

function About() {
  return (
    <div id='About'>
        <h1>Title</h1>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio aut repudiandae aliquid blanditiis, inventore voluptas? Facilis quaerat eaque rerum fugiat quas fuga ut perspiciatis, iste magnam. Nemo, fugiat facere!
        </p>
        <p>sSOMETHING SOMETHING SOMETHING</p>
        <div >
        <Bubble status={true} slow={false}/>
        <Bubble status={true} slow={true}/>

        </div>

    </div>
  )
}

export default About