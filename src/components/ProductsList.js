import React, { useEffect } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
function ProductsList({products,getProducts,getCategories,categories,getProductInCategory}){
  useEffect(()=>{

    getProducts()
    getCategories()
  },[])

    
  return(
    <div className="buttons">
       {<button  onClick={()=>{

        getProducts()
      }}className="m-2 btn btn-primary">All</button>}



    {categories.map((cat)=>{
      return <button key={cat} onClick={()=>{

        getProductInCategory(cat)
      }}className="m-2 btn btn-primary m-2">{cat}</button>

    })}
      
    <h2 className="p-5">Our Products</h2>
    <div className="container">
      <div className="row">
        {products.map((product)=>{
          return(     
               <div className="col-lg-3 col-md-6" key={product.id}>

          <Product product={product} showbutton={true}/>
          
        </div>
        );

        })}
      </div>
    </div>

    </div>
  );
}

export default ProductsList;