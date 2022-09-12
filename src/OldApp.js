import Home from './components/oldAppComponents/home/Home'
import './App.css';
import About from './components/oldAppComponents/about/about'
import Portfolio from './components/oldAppComponents/portfolio/portfolio'
import Contact from './components/oldAppComponents/contact/contact'
import Footer from './components/oldAppComponents/footer/Footer'

function OldApp() {
  return (
    <div className="App">
      <Home></Home>
      <main>

        <div className="body-conteiner">
          <About></About>
          <Portfolio></Portfolio>
          <Contact />
        </div>
      </main>
      <Footer />  
    </div>
  );
}

export default OldApp;
