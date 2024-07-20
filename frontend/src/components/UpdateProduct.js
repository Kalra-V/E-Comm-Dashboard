import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, [])

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`)
    result = await result.json();
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
  }

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
        method: 'put',
        body: JSON.stringify({name, price, category, company}),
        headers: {
            'Content-Type': "application/json"
        }
    })
    result = await result.json()
    navigate("/")
  }

  return (
    <div className="product">
      <h1>Update Product</h1>
      <input
        type="text"
        placeholder="Enter product name"
        className="inputBox"
        value={name}
        onChange={(e) => {setName(e.target.value)}}
      ></input>
      <input
        type="text"
        placeholder="Enter product price"
        className="inputBox"
        value={price}
        onChange={(e) => {setPrice(e.target.value)}}
      ></input>
      <input
        type="text"
        placeholder="Enter product category"
        className="inputBox"
        value={category}
        onChange={(e) => {setCategory(e.target.value)}}
      ></input>
      <input
        type="text"
        placeholder="Enter product company"
        className="inputBox"
        value={company}
        onChange={(e) => {setCompany(e.target.value)}}
      ></input>
      <button className="appbutton" onClick={updateProduct}>Update Product</button>
    </div>
  );
};

export default UpdateProduct;
