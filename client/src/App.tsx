import React from 'react';
import MilkList from './Components/MilkList';
import ProductInfo from "./Components/ProductInfo";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
      <div className="App">
        <Routes>
            <Route path="/" element={<MilkList />} />
            <Route path="/milk/:id" element={<ProductInfo />} />
        </Routes>
      </div>
  );
}

export default App;
