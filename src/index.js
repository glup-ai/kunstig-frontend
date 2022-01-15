import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';

import App from './App';
import Models from './components/Models';
import { AboutUs } from './components/AboutUs/AboutUs';
import Gallery2 from './components/Gallery2';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/modeller" element={<Models />}></Route>
        <Route path="/galleri" element={<Gallery2 />}></Route>
        <Route path="/om" element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
