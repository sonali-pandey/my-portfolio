import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
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
        {currentTitle === titles[0] ? <About />: "Hello"}
    </main>
    <Footer />
    </div>
  );
}

export default App;
