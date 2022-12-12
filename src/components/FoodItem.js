import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FoodItem = ({ food }) => {
  //seperates each step onto new line
  let steps = [];
  for (var index = 0; index < food.steps.length; index++) {
    steps = steps.concat(food.steps[index] + "\n")
  }
  //seperates each ingredient onto new line
  let ing = [];
  for (var index = 0; index < food.ingredients.length; index++) {
    ing = ing.concat(food.ingredients[index] + "\n")
  }
  //gets vegan/vegetrain friendly info
  let intolerances = ""
  if (food.vegan) {
    intolerances = "Vegan Friendly"
  } if (food.vegetarian) {
    intolerances = "Vegetarian Friendly"
  } if (food.vegan && food.vegetarian) {
    intolerances = "Vegan and Vegetrian Friendly"
  } if (!food.vegan && !food.vegetarian) {
    intolerances = "Not suitable for vegans or vegetarians"
  }
  return (
    <div id="recipes">
      <Accordion.Header>{food.name}</Accordion.Header>
      <Accordion.Body>
        <dl>
          <img class="image" src={food.image} />
          <dt>Description:</dt>
          <dd>{food.description}</dd>
          <dt>Cooking Time:</dt>
          <dd>{food.time}</dd>
          <dt>Serves:</dt>
          <dd class="serves">{food.serves}</dd>
          <dt>Vegan/Vegetarian friendly:</dt>
          <dd>{intolerances}</dd>
          <dt>Ingredients:</dt>
          <dd id="ingredients">{ing}</dd>
          <dt>Steps:</dt>
          <dd id="steps">{steps}</dd>
        </dl>
        <hr></hr>
      </Accordion.Body>
    </div>
  );
};
export default FoodItem;