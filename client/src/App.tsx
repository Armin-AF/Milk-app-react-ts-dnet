import React from 'react';
import MilkList from './Components/MilkList';
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";



function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<MilkList />} />
        </Routes>
      </div>
  );
}

export default App;
