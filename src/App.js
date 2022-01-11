import { useEffect } from 'react';
import Header from './components/Header';
import { pingServer } from './utils/utils';
import './App.css';
const App = () => {
  useEffect(() => {
    pingServer();
  }, []);

  return (
    <main className="mainContainer">
      <Header />
    </main>
  );
};

export default App;
