import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/products/${id}`)
        .then((res) => setProduct(res.data));
    }
  }, [id]);
  return (
    <div>
      ProductDetail ID: {id}
      <div>Name: {product.name}</div>
      <div>Price: {product.price}</div>
    </div>
  );
};

export default ProductDetail;
