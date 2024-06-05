import React, { useState } from "react";

const MyComponent = () => {

  const [foods, setFoods] = useState(["Apple", "Banana", "Orange"])

  const handleAddFood = () => {

    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods(f => [...foods, newFood])
  }

  const handelRemoveFood = (index) => {
    setFoods(foods.filter((_, i) => i !== index)) //_ = parameter is being ignored
  }

  return (
    <>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) =>
          <li key={index} onMouseDown={() => handelRemoveFood(index)}>
            {food}
          </li>
        )}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter a food" />
      <button onMouseDown={handleAddFood}>Add Food</button>
    </>
  )
}

export default MyComponent