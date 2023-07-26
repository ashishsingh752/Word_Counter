// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#353740';
    }
  };
  
  return (
    <>
    <Router>
    <div className="">
      <Navbar title="Word Counter" mode={mode} toggleMode={toggleMode} />
      <Routes>
          <Route exact path="/" element = { <TextForm heading="Enter the text to analyze" mode={mode} />
          } />
          <Route exact path="/about" element = { <About title="About me" mode={mode}/>} />
        </Routes>
        <Footer mode={mode}/>
    </div>
    </Router>
    </>
  );
}
export default App;
