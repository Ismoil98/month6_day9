import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filter, setFilter] = useState("All");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://dummyjson.com/products");
      const data = await res?.data.products;
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleProductSearch = (e) => {
    const text = e.target.value.trim().toLowerCase();
    setFilteredProducts(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(text) ||
          product.description.toLowerCase().includes(text) ||
          product.brand.toLowerCase().includes(text)
      )
    );
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
    const filter = e.target.value;
    if (filter === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === filter)
      );
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="container py-5 min-vh-100 ">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h1>Products</h1>
        <input
          type="text"
          className="form-control w-25"
          onChange={handleProductSearch}
          placeholder="Search"
        />
        <select
          className="form-select w-25"
          name="filter"
          id="filter"
          value={filter}
          onChange={handleFilter}
        >
          <option value="All">All</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="groceries">Groceries</option>
          <option value="skincare">Skin care</option>
        </select>
      </div>
      {loading && <Loader />}
      {error && <Error />}
      {filteredProducts.length > 0 && (
        <div className="d-flex gap-5 flex-wrap justify-content-center justify-content-sm-start">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
