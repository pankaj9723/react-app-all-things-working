import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer  from './Components/Footers/Footers';
import Menu from './Components/Menu/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <Menu/>
  
   
   <App/>
   <Footer/>
  </React.StrictMode>
);




