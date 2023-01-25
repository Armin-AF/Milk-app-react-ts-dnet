import React from 'react';
import MilkList from './Components/MilkList';
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";



function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<MilkList />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
