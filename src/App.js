import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './HomePage/HomePage'
import {PortfolioList} from './container';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/allprojects" element={<PortfolioList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App