import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const navigate = useNavigate();
  function handleChange(e) {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleClick(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="Title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Description"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="Price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="Cover "
        onChange={handleChange}
        name="cover"
      />

      <button className="formButton" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default Add;
