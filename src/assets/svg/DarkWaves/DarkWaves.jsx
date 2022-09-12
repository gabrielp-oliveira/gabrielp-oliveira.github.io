import React from 'react'
import { Parallax, Background } from 'react-parallax'
import './darkwaves.css'
import Wave from 'react-wavify'

function DarkWaves() {


  return (
    <div className='darkWaves' draggable='false'>

      <Wave fill='black' className='waves first slide-bottom'
        paused={false}
        options={{
          height: 5,
          amplitude: 7,
          speed: 2,
          points: 3
          
        }}
      />
      <Wave fill='rgba(255 , 255  , 255, 1 )' className='waves'
        paused={false}
        options={{
          height: 17,
          amplitude: 20,
          speed: 1.2,
          points: 3
          
        }}
      />
      <Wave fill='rgba(230, 230, 230, 0.8)' className='waves'
        paused={false}
        options={{
          height: 28,
          amplitude: 30,
          speed: 1.5,
          points: 4
          
        }}
      />
      <Wave fill='rgba(0, 0, 0, 0.8)' className='waves'
        paused={false}
        options={{
          height: 30,
          amplitude: 45,
          speed: 1.2,
          points: 3
          
        }}
      />
      <Wave fill='rgba(230, 230, 230, 0.9)' className='waves'
        paused={false}
        options={{
          height: 32,
          amplitude: 45,
          speed: 1.4,
          points: 5
          
        }}
      />
      <Wave fill='white' className='waves'
        paused={false}
        options={{
          height: 50,
          amplitude: 40,
          speed: 1,
          points: 4
        }}
      />

    </div>
  )
}

export default DarkWaves

function Bg({ src, dir }) {
  return <Background >

    <img src={src} className={dir} width={'110%'} draggable="false" />
  </Background>
}



