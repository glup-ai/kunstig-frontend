import React from 'react';
import { 
  BrowserRouter, 
  Routes,
  Route 
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Models from './components/Models';
import Gallery from './components/Gallery/Gallery.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/models" element={<Models />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
