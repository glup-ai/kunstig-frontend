import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';

import App from './App';
import Models from './components/Models';
import { AboutUs } from './components/AboutUs/AboutUs';
import Gallery from './components/Gallery2';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/modeller" element={<Models/>}/>
        <Route path="/galleri" element={<Gallery/>}/>
        <Route path="/om" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
