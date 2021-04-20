import React from "react";
import { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {

   const [productData, setProductData] = useState({
      productCode: '',
      name: '',
      brand: '',
      type: '',
      venderName: '',
   });

   const mySubmitHandler = (event) => {
      event.preventDefault();
      console.log('Product Code: ' + productData.productCode);
      console.log('Product Name: ' + productData.name);
      console.log('Product Brand: '+ productData.brand);
      console.log('Product Type: ' + productData.type);
      console.log('Vender Name: ' + productData.venderName);

      const newProduct = {
         product_code: productData.productCode,
         name: productData.name,
         brand: productData.brand,
         type: productData.type,
         vender_name: productData.venderName,
      };

      // console.log(newProduct);

      axios.post(`https://salty-meadow-43376.herokuapp.com/products/register`, newProduct)
      .then(res => {
         console.log(res);
         console.log(res.data);
      });
   
   };

   const myChangeHandler = (event) => {
      let key = event.target.name;
      let val = event.target.value;
      setProductData({
         ...productData,
         [key]: val
      });
   };

   return (
      <form onSubmit={e => {mySubmitHandler(e)}}>
         <h1>Product {productData.productCode}</h1>
         <p>Product Code:</p>
         <input type='text' name='productCode' onChange={e => {myChangeHandler(e)}} />
         <p>Product Name:</p>
         <input type='text' name='name' onChange={e => {myChangeHandler(e)}} />
         <p>Product Brand:</p>
         <input type='text' name='brand' onChange={e => {myChangeHandler(e)}} />
         <p>Product Type:</p>
         <input type='text' name='type' onChange={e => {myChangeHandler(e)}} />
         <p>Vender Name:</p>
         <input type='text' name='venderName' onChange={e => {myChangeHandler(e)}} />
         <input type='submit' />
      </form>
   );
};

export default AddProductForm;