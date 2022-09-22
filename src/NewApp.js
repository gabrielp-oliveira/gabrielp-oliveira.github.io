import React from "react";
import Home from "./components/newAppComponents/Home/Home";
import About from "./components/newAppComponents/About/About";
import Footer from "./components/newAppComponents/footer/footer";
import Ship from "./assets/ship";
import Contact from './components/newAppComponents/contact/contact'
function NewApp() {
  return (
    <div className="app">
        <Home />
        <main className="newMain">
          <About></About>

          <Ship color="white" height="150px" width="150px" />
          <Contact></Contact>
        </main>
        <Footer></Footer>
    </div>
  );
}

export default NewApp;
