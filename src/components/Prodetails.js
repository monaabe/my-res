import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import "./Prodetails.css";

function Prodetails(){
  const api_url="https://fakestoreapi.com/products"
  const[product,setProduct]=useState({})
  const params=useParams();

  useEffect(()=>{
    fetch(`${api_url}/${params.productId}`).then((res)=>res.json()).then((product)=>setProduct(product))
  },[])
  return(
    <div className="  container d-flex justify-content-center text-center  ">
      <div className="row mt-5">
        <div className="col-6  ">
  <h1 className="he1 "><Product product={product} showbutton={false} /></h1>
</div>
<div className="col-6 ">

      <p className="card-description me-2 fw-bold ">{product && product.description}</p><br></br><br></br>


      <h5 className="card-price bg-dark text-bg-primary ">{product && product.price}$</h5>

</div>
</div>
</div>
  );
}
export default Prodetails;