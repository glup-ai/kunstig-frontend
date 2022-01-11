import { useEffect } from 'react';
import Header from './components/Header';
import { Gallery } from './components/Gallery/Gallery';
import { AboutUs } from './components/AboutUs/AboutUs';
import { pingServer } from './utils.js';
import './App.css';
const App = () => {
  const aboutUs = false;
  useEffect(() => {
    pingServer();
  }, []);

  return (
    <main className="mainContainer">
      <Header />
      <h1 className="title">KUNSTIG | AI-GENERERT KUNST.</h1>
      {aboutUs ? <AboutUs /> : <Gallery />}
    </main>
  );
};

export default App;
