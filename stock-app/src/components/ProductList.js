import React, { useState, useEffect } from "react";

import axios from "axios";

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("https://salty-meadow-43376.herokuapp.com/products/all")
      .then((res) => {
        if (res.status === 200) {
          setProductList(res.data);
        }
      });
  }, []);
  const removeProductById = (id, e) => {
    console.log(id)
    const url = `https://salty-meadow-43376.herokuapp.com/products/delete/`;

    axios
      .delete(url, id)
      .then((res) => {
        console.log("deleted", id);
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rows = [];
  let cards = [];
  for (const [index, product] of productList.entries()) {
    console.log("start loop", index);
    cards.push(
      <div className="col-4 mr-auto" key={product._id}>
        <div className="card" style={{ marginTop: "20px" }}>
          <div className="card-header">
            <span className="float-start">{product.type}</span>
            <span className="float-end">{product.product_code}</span>
          </div>
          <div className="card-body">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-text">{product.brand}</p>
            <button
              className="btn btn-primary"
              onClick={(e) => removeProductById(product._id, e)}
            >
              Go Away
            </button>
          </div>
        </div>
      </div>
    );
    if ((index % 2 === 0 && index !== 0) || index === productList.length - 1) {
      rows.push(<div className="row">{cards}</div>);
      cards = [];
    }
  }

  return rows;
}

export default ProductList;
