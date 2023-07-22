import logo from './logo.svg';
import React, { useContext, useState, useEffect } from "react";
import './App.css';
import { ProductProvider } from "./Context";
import Main from './Component/Main';
import AddProductForm from './Component/AddProductForm';

function App() {
 

  return (

    <ProductProvider>

        <AddProductForm />
        <Main />

    </ProductProvider>


  );
}

export default App;
