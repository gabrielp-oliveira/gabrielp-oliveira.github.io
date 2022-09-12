import React from 'react'
import Home from './components/newAppComponents/Home/Home'
import About from './components/newAppComponents/About/About'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
function NewApp() {
  return (

    <div className='app'>
      {/* <ParallaxProvider> */}

        {/* <Home /> */}
      <main>
        {/* <Parallax speed={10}> */}
          <About></About>
        {/* </Parallax> */}
      </main>
      {/* </ParallaxProvider> */}
      </div>
  )
}

export default NewApp