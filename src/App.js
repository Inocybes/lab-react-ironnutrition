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
  const [showAddFood, setShowAddFood] = useState(false);

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
    <div className="food-container">
      <div>
        <h1>Iron Nutrition</h1>

        <button onClick={() => setShowAddFood(!showAddFood)}>
          {showAddFood ? 'Hide' : 'Add Food'}
          
        </button>
        
        {showAddFood && <AddForm addFood={addFood} />}

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
      </div>
      <div>
        <TodaysFoods todaysFood={todaysFood} />
      </div>
    </div>
  );
}

export default App;
