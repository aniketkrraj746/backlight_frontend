import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from './Homepage';


const navbar = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      
    </Routes>
  );
}

export default navbar;