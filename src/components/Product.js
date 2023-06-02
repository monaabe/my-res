import React from "react";
import { Link } from "react-router-dom";

function Product(props){
  const{product,showbutton}=props;
  return(
    <>

     <div className="card " >
  <img src={product.image} className="card-img-top" alt={product.title} />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    
    {showbutton&&<Link href="#" className="btn btn-primary  m-auto  " to={`/product/${product.id}`}>Details</Link>}
  </div>
</div>

    </>
  );
}
export default Product;