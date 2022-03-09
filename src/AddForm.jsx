import React from 'react';
import { useState } from "react";


function AddForm(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    props.addFood({ name, calories, image, quantity});
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCaloriesChange = (event) => {
    setCalories(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  
  

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="calories">Calories</label>
        <input
          
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesChange}
        />
        
        {/* <label htmlFor="image"></label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleCaloriesChange}
        /> */}
        
        <label htmlFor="quantity">Quantity</label>
        <input
          
          type="text"
          name="quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <br />
        <button>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddForm;