import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';


function Product(props) {
  const { product, showbutton } = props;
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  // Function to handle toggling description visibility
  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
  };

   //Function to handle slicing of description
  const sliceDescription = (description) => {
    const maxSliceLength = 100; // Maximum number of characters in the sliced description
    if (description && description.length > maxSliceLength && !descriptionVisible) {
      return description.slice(0, maxSliceLength) + "...";
   }
   return description;
  };

  return (
    <>
      <div className=" container   ">

        <div className="card text-center    ">
          <img
            src={product && product.image}
            className="card-img-top mt-4"
            alt={product && product.title}
          />
          <div className="card-body ">
            <h5 className="card-title mt-4  fs-6 ">{product && product.title}</h5>

            {showbutton && (
                <Link
                  //to={`/product/${product && product.id}`}
                                  to={`/product/${product.id}`}

                  className="btn btn-danger mt-5 "
                  onClick={toggleDescription}
                >
                  Details

                
                                </Link>

            )}
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Product;