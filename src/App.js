import { useEffect } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { pingServer } from './utils/utils';
import './App.scss';
const App = () => {
  useEffect(() => {
    AOS.init()
    //pingServer();
  }, []);

  return (
    <main className="mainContainer">
      <Header />
      Dette er en app
    </main>
  );
};

export default App;
