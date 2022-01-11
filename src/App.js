import { useEffect } from 'react';
import Header from './components/Header';
import { pingServer } from './utils/utils';
import './App.scss';
const App = () => {
  useEffect(() => {
    pingServer();
  }, []);

  return (
    <main className="mainContainer">
      <Header />
      Dette er App
    </main>
  );
};

export default App;
