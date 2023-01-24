import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import ProductInfo from "./Components/ProductInfo";

function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />} />
                <Route path="/product/:id" element={<ProductInfo />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Index />);
