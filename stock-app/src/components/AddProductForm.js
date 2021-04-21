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
      <div>
         {/* <Navbar /> */}
         <form onSubmit={e => {mySubmitHandler(e)}} 
         style={{width: '80%', marginLeft: '5%', marginRight: '5%'}}>
            <h1>Add New Product</h1>
            <div class='form-group'>
               <p>Product Code:</p>
               <input type='text' name='productCode' class='form-control'
               onChange={e => {myChangeHandler(e)}} />
            </div>
            <div class='form-group'>
               <p>Product Name:</p>
               <input type='text' name='name' class='form-control'
               onChange={e => {myChangeHandler(e)}} />
            </div>
            <div class='form-group'>
               <p>Product Brand:</p>
               <input type='text' name='brand' class='form-control'
               onChange={e => {myChangeHandler(e)}} />
            </div>
            <div class='form-group'>
               <p>Product Type:</p>
               <input type='text' name='type' class='form-control' 
               onChange={e => {myChangeHandler(e)}} />
            </div>
            <div class='form-group'>
               <p>Vender Name:</p>
               <input type='text' name='venderName' class='form-control' 
               onChange={e => {myChangeHandler(e)}} />
            </div>
            <button type='submit' class='btn btn-primary' style={{margin: '2%'}}>Submit</button>
         </form>
      </div>
   );
};

export default AddProductForm;