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
  const handleRemove = (product) => {
    const url = `https://salty-meadow-43376.herokuapp.com/products/all/${product._id}`;

    axios
      .delete(url)
      .then((res) => {
        this.setState((previousState) => {
          return {
            movies: previousState.movies.filter((m) => m.id !== movie.id),
          };
        });
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
              onClick={(e) => this.removeProductById(e, product)}
            >
              Go Away
            </button>
            <a href="/" className="btn btn-primary">
              Go Away
            </a>
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
