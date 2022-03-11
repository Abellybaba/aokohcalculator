import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar';
import Calculator from './routes/Calculator';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>

<BrowserRouter>
    <Navbar />
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Calculator" element={<Calculator />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

