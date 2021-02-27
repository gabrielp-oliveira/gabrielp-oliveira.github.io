import Home from './components/home/Home'
import './App.css';
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
function App() {
  return (
    <div className="App">
      <Home></Home>
      <main>

      <About></About>
      <Portfolio></Portfolio>
      <Contact/>
      </main>
    </div>
  );
}

export default App;
