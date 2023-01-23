import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProductInfo from "./Components/ProductInfo";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Router>
        <App />
    </Router>
);
