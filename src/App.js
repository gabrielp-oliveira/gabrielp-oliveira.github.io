import Home from './components/home/Home'
import './App.css';
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/Footer'

function App() {
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

export default App;