import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function Prodetails(){
  const api_url="https://fakestoreapi.com/products"
  const[product,setProduct]=useState({})
  const params=useParams();

  useEffect(()=>{
    fetch(`${api_url}/${params.productId}`).then((res)=>res.json()).then((product)=>setProduct(product))
  },[])
  return(
  <h1><Product product={product} showbutton={false}/></h1>

  );
}
export default Prodetails;