import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Error from "../components/Error";
import Loader from "../components/Loader";
import axios from "axios";
import { Button } from "react-bootstrap";

const ProductDetails = () => {
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  const fetchProduct = async (productId) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await res.data;
      setProduct(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct(productId);
  }, [productId]);

  return (
    <div className="container py-5 min-vh-100 ">
      <Link to="/products" className="btn btn-dark">
        Go back
      </Link>
      <h1 className="my-3">Product details</h1>
      {loading && <Loader />}
      {error && <Error />}
      {product && (
        <div className="d-flex flex-wrap gap-5 align-items-center">
          <div className="flex-1">
            <img src={product.images[0]} />
          </div>
          <div className="flex-1">
            <h2>{product.title}</h2>
            <p>{product.brand}</p>
            <h3>${product.price}</h3>
            <p>{product.description}</p>
            <p>{product.category}</p>
            <p>{product.rating}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
