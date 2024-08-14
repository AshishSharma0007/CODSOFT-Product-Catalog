import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="col">
      <div class="card h-100 border border-dark">
        <img
          src={product.thumbnail}
          class="card-img-top h-75 bg-light"
          alt="..."
        />
        <div class="card-body bg-dark">
          <h4 class="card-title text-light">{product.title}</h4>
          <h5 class="text-light">₹{product.price}</h5>
          <button
            class="btn btn-secondary"
            onClick={() => dispatch({ type: "Add", product: product })}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
