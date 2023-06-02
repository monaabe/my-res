import React, { useEffect, useState } from "react";
import './ProductsList.css';
import Product from "./Product";
function ProductsList(){
  const api_url="https://fakestoreapi.com/products"
  const[products,setProducts]=useState([])
  const[categories,setCategories]=useState([])
  
  const getProducts=()=>{

    fetch(api_url).then((res)=>res.json()).then((data)=>setProducts(data))

  }

  const getCategories=()=>{

    fetch(`${api_url}/categories`).then((res)=>res.json()).then((data)=>setCategories(data))

  }

  
  const getProductInCategory=(catName)=>{

    fetch(`${api_url}/category/${catName}`).then((res)=>res.json()).then((data)=>setProducts(data))

  }



  useEffect(()=>{

    getProducts()
    getCategories()
  },[])

    
  return(
    <>
       {<button  onClick={()=>{

        getProducts()
      }}>All</button>}



    {categories.map((cat)=>{
      return <button key={cat} onClick={()=>{

        getProductInCategory(cat)
      }}>{cat}</button>

    })}
      
    <h2 className="p-5">Our Products</h2>
    <div className="container">
      <div className="row">
        {products.map((product)=>{
          return(     
               <div className="col-3" key={product.id}>
          <Product product={product} showbutton={true}/>
        </div>
        );

        })}
      </div>
    </div>

    </>
  );
}

export default ProductsList;