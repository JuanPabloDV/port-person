import './App.css';

import Header from './components/Header/'
import Banner from './components/Banner/'
import About from './components/About/'
import Skills from './components/Skills/'
import Projects from './components/Projects/'
import Contact from './components/Contact/'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Skills id="skills"/>
      <Projects id="projects"/>
      <Contact/>
    </div>
  );
}

export default App;
