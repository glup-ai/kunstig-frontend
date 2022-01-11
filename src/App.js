import React, { useEffect } from 'react';
import Header from './components/Header.js';
import { pingServer } from './utils.js';
import './App.css'
const App = () => {

  useEffect(() => {
    pingServer()
  }, [])

  return (<main className="mainContainer">
    <Header/>
  </main>)
}


export default App;
