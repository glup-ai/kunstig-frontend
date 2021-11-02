import React, { useEffect } from 'react';
import Gallery from './components/Gallery/Gallery.js';
import { pingServer } from './utils.js';
import './App.css'
const App = () => {

  useEffect(() => {
    pingServer()
  }, [])

  return (<main className="mainContainer">
    <h1 className="title">KUNSTIG | AI-GENERERT KUNST.</h1>
    <Gallery />
  </main>)
}


export default App;
