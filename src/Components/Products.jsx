import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = () => {
  //     axios.get("http://localhost:8080/products").then((res) => {
  //       setProducts(res.data);
  //     });
  //   };
  //   fetchProducts();
  // }, []);
  useEffect(() => {
    const fetchProducts = async () => {
      let r = await fetch("http://localhost:8080/products");
      let d = await r.json();
      setProducts(d);
    };
    fetchProducts();
  }, []);

  const [value, setValue] = useState();

  const navigate = useNavigate();

  const handleOnClick = (ProdID) => {
    for (let i = 0; i < products.length; i++) {
      if (ProdID === products[i].id) {
        navigate(`/products/${ProdID}`);
        break;
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "auto",
          width: "fit-content",
        }}
      >
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <button onClick={()=> handleOnClick(value)}>Search by ID</button>
      </div>
      Products
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          gap: "15px",
        }}
      >
        <Outlet />
        <div>
          {products.map((el) => (
            <Link
              to={`/products/${el.id}`}
              key={el.id}
              style={{ display: "grid" }}
            >
              {el.name}
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
