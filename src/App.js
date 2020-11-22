import React, { Fragment } from 'react';
import './App.css';
import Nav from './component/navbar/navbar'
import Main from './component/main/main'
import Footer from './component/footer/footer'

function App() {
  return (
    <Fragment>

      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>

    </Fragment>
  );
}

export default App;
