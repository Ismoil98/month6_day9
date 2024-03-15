import { Button } from "react-bootstrap";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product, handleProductDetails }) => {
  const navigate = useNavigate();
  return (
    <div className="card" style={{ width: "18rem", height: "20rem" }}>
      <img
        src={product.images[0]}
        className="card-img-top h-50 object-fit-cover"
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title text-truncate">{product.title}</h5>
        <p className="card-text text-truncate">{product.description}</p>
        <Link to={`/products/${product.id}`} className="btn btn-dark btn-sm">
          See details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
