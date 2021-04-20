import React, { useState } from "react";

import axios from "axios";

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
        const persons = res.data;
        this.setState({ persons });
      });
    setData(result.data);
  });

  axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    const persons = res.data;
    this.setState({ persons });
  });

  return <div></div>;
}

export default ProductList;
