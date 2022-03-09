import React from 'react'

function TodaysFoods(props) {
   
  const total = props.todaysFood.reduce((acc, dayFood) => {
    console.log(dayFood);
    return acc + (dayFood.quantity * dayFood.calories)

  }, 0)
  
  return (
    <div>
      <h3>Today's Foods</h3>

      {props.todaysFood.map((eachFood) => {
        const {name, quantity, calories} = eachFood
        return <p>{name}: {quantity} x {calories}cal : {quantity * calories}</p>
      })}

      <p>Total: {total}€</p>

    </div>
  )
}


export default TodaysFoods