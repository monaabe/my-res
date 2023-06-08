import './App.css';
import React, { useState } from "react";

import Navbar from './components/Navbar'
import ProductsList from './components/ProductsList';
import Slider from './components/Slider';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Prodetails from './components/Prodetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  const api_url="https://fakestoreapi.com/products"
  const[categories,setCategories]=useState([])

  const[products,setProducts]=useState([])

  const getProducts=()=>{

    fetch(api_url).then((res)=>res.json()).then((data)=>setProducts(data))

  }
  const getCategories=()=>{

    fetch(`${api_url}/categories`).then((res)=>res.json()).then((data)=>setCategories(data))

  }
  const getProductInCategory=(catName)=>{

    fetch(`${api_url}/category/${catName}`).then((res)=>res.json()).then((data)=>setProducts(data))

  }
  return (
    <div className="App">
      
      <>
      
      <Navbar/>

      <Routes>

<Route path='Home' element={<Home/>} />
<Route path='About' element={<About/>} />
<Route path='Contact' element={<Contact />} />
<Route path='product/:productId/:term' element={<Prodetails products={products} />} />




</Routes>

      <Slider/>
      <ProductsList products={products} getProductInCategory={getProductInCategory} categories={categories} getProducts={getProducts} getCategories={getCategories} />
      </>
    </div>
  );
}

export default App;
