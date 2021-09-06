import React, { useState } from 'react';
import Nav from './components/Nav';
import './App.css';

function App() {

  const [titles] = useState([
    { name: 'About'},
    { name: 'Portfolio'},
    { name: 'Contact'},
    { name: 'Resume'}
  ])

  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  return (
    <Nav
      titles={titles}
      setCurrentTitle={setCurrentTitle}
      currentTitle={currentTitle}
    />
  );
}

export default App;
