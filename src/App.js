import React, { Fragment } from 'react';
import './App.css';
import Nav from './component/navbar/navbar'
import Main from './component/main/main'
import Smedia from './component/socialmedia/socialmedia'
import Flag from './component/flag/flag'

function App() {
  return (
    <Fragment>

      <Nav></Nav>
      <Main></Main>
      <Smedia></Smedia>
      <Flag></Flag>

    </Fragment>
  );
}

export default App;
