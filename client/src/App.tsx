import React from 'react';
import MilkList from './Components/MilkList';
import { Route, Routes } from "react-router-dom";



function App() {
  return (
      <div className="App">
        <Routes>
            <Route path="/" element={<MilkList />} />
        </Routes>
      </div>
  );
}

export default App;
