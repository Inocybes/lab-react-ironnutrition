import React from 'react';
import { useState } from 'react';


function FoodBox(props) {
  const { name, calories, image} = props.eachFood;
  const [quantity, setQuantity] = useState(0)

  const handleChange = (event) => {
    setQuantity(event.target.value);
   
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addToTodaysFood({ name, calories, quantity });
  };

  return (
    <div>
    <img src={image} alt={name} width= "100px"/>
      
    <h3>{name}</h3>
    <p>{calories}</p>
   
  
      <form onSubmit={handleSubmit}>
        <input type="number" name="quantity" value={quantity} onChange={handleChange} />
        <button>add</button>
      </form>
    
    </div>
  );

}

export default FoodBox;