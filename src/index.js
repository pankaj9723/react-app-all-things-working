import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Footer  from './Components/Footers/Footers';
import Menu from './Components/Menu/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Header/>
   <Menu/>
   <Dashboard/>
   
   <App/>
   <Footer/>
  </React.StrictMode>
);


