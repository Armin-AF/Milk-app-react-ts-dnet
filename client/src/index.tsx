import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter, Route, Routes, useParams} from 'react-router-dom';
import ProductInfo from "./Components/ProductInfo";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/product/:id" element={<ProductInfo id={useParams.id} />} />
        </Routes>
    </BrowserRouter>
);
