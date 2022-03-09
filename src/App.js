import React from 'react';
import { useState } from 'react';
import foods from './foods.json';

import './App.css';
import FoodBox from './FoodBox';
import AddForm from './AddForm';
import Search from './Search';
import TodaysFoods from './TodaysFoods';

function App() {
  //States
  const [allFoods, setAllFoods] = useState(foods);
  const [foodToRender, setFoodToRender] = useState(foods);
  const [todaysFood, setTodaysFood] = useState([]);

  const addFood = (food) => {
    setAllFoods([...allFoods, food]);
    setFoodToRender([...allFoods, food]);
  };

  // Filter Search
  const searchFood = (searchQuery) => {
    const filteredFood = allFoods.filter((eachFood) => {
      return eachFood.name.toLowerCase().startsWith(searchQuery);
    });
    setFoodToRender(filteredFood);
  };
  //Add food
  const addToTodaysFood = (dayFood) => {
    setTodaysFood([...todaysFood, dayFood]);
  };

  return (
    <div>
      <h1>Iron Nutrition</h1>

      <AddForm addFood={addFood} />

      <Search searchFood={searchFood} />

      {foodToRender.map((eachFood, index) => {
        return (
          <FoodBox
            eachFood={eachFood}
            key={index + eachFood.name}
            addToTodaysFood={addToTodaysFood}
          />
        );
      })}

      <TodaysFoods todaysFood={todaysFood} />
    </div>
  );
}

export default App;
