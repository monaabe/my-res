import React, { useEffect } from "react";
import Product from "./Product";
function ProductsList({products,getProducts,getCategories,categories,getProductInCategory}){
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