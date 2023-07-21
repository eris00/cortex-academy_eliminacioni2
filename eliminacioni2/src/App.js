import logo from './logo.svg';
import React, { useContext, useState, useEffect } from "react";
import './App.css';
import { ProductProvider } from "./Context";
import TestComp from './Component/TestComp';

function App() {



  return (

    <ProductProvider>

        <TestComp />

    </ProductProvider>

  );
}

export default App;
