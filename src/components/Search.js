import React, { useState } from "react";
import DisplayFoodItems from "./DisplayFoodItems";
import { ingredientBoxes } from "../data/Ingredients";

function Search({ details }) {
  const [ingredients, setIngredients] = useState([]);
  const [searchField, setSearchField] = useState("");
  const filtered = details.filter((entry) => {
    if (!searchField) {
      return (
        ingredients.length === 0 ||
        (entry.ingredients.length > 0 &&
          ingredients.every((selectedIngredient) =>
            entry.ingredients.some(
              (foodIngredient) =>
                foodIngredient.toLowerCase().includes(selectedIngredient.toLowerCase())
            )
          ))
      );
    }
    if (searchField) {
      return (
        entry.name.toLowerCase().includes(searchField.toLowerCase()) ||
        entry.catagory.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    }
  });
  return (
    <div>
      <h2>Filter & Seacrh</h2>
      <div>
        <input id="search"
          type="text"
          placeholder="Search by recipe name or catagory"
          onChange={(e) => setSearchField(e.target.value)}
        />
      </div>
      {ingredientBoxes.map((ingredient, i) => {
        const checked = ingredients.some(
          (selectedIngredient) =>
            ingredient.toLowerCase() === selectedIngredient.toLowerCase()
        );
        return (
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => {
                if (checked) {
                  setIngredients(
                    ingredients.filter(
                      (selectedIngredient) =>
                        ingredient.toLowerCase() !==
                        selectedIngredient.toLowerCase()
                    )
                  );
                } else {
                  setIngredients([...ingredients, ingredient]);
                }
              }}
            />
            {ingredient}&nbsp;
          </label>
        );
      })}
      <div class="flex">
        <DisplayFoodItems foodList={filtered} />
      </div>
    </div>
  );
}
export default Search;