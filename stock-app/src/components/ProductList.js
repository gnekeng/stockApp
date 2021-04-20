import React, { useState, useEffect } from "react";

import axios from "axios";

function ProductList() {
  let [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products/all")
      .then((res) => {
        if(res.status === 200){
          setProductList(res.data)
        }
      });
  }, []);

  return (
    <div>
      {productList.map((item) => (
        <li key={item._id}>
        </li>
      ))}
    </div>
  );
}

export default ProductList;
