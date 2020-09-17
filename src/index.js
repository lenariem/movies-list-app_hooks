import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
/* import App from './components/App'; */
import Routes from "./components/Routes"
import "./css/index.css"

ReactDOM.render(
  <React.StrictMode> 
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
