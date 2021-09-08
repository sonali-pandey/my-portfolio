import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
// import './App.css';

function App() {

  const [titles] = useState([
    { name: 'About'},
    { name: 'Portfolio'},
    { name: 'Contact'},
    { name: 'Resume'}
  ])

  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  return (
    <div>
    <Nav
      titles={titles}
      setCurrentTitle={setCurrentTitle}
      currentTitle={currentTitle}
    />
    <main>
        { 
        currentTitle === titles[0]  ? <About />
        : currentTitle === titles[1] ? <Portfolio />
        : currentTitle === titles[2] ? <Contact />
        : <Resume />
        }
    </main>
    <Footer />
    </div>
  );
}

export default App;
