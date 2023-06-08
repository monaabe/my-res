import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product(props) {
  const { product, showbutton } = props;
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  // Function to handle toggling description visibility
  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
  };

  // Function to handle slicing of description
  const sliceDescription = (description) => {
    const maxSliceLength = 100; // Maximum number of characters in the sliced description
    if (description && description.length > maxSliceLength && !descriptionVisible) {
      return description.slice(0, maxSliceLength) + "...";
    }
    return description;
  };

  return (
    <>
      <div className=" ">
        <div className="card m-4  ">
          <img
            src={product && product.image}
            className="card-img-top "
            alt={product && product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product && product.title}</h5>
            <p className="card-description">
              {sliceDescription(product && product.description)}
            </p>
            {showbutton && (
              <>
                <Link
                  to={`/product/${product && product.id}`}
                  className="btn btn-primary  m-auto"
                  onClick={toggleDescription}
                >
                  Details
                </Link>
                {descriptionVisible && (
                  <p className="card-description">{product && product.description}</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;