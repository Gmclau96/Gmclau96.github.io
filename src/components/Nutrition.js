import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
const Nutrition = ({ item }) => {
  //gets serving size on selected recipe
  let activeAccordion = ""
  let serves = 0;
  activeAccordion = document.querySelector('button[aria-expanded="true"]');
  if (activeAccordion !== null) {
    let parent = activeAccordion.closest(".accordion-item");
    serves = parent.querySelectorAll(".serves")[0].innerHTML;
  }
  //calculates nutritional info per serving to 2dp
  let servingSize = item.serving_size_g / serves;
  servingSize = servingSize.toFixed(2);
  let calories = item.calories / serves;
  calories = calories.toFixed(2);
  let sugar = item.sugar_g / serves;
  sugar = sugar.toFixed(2);
  let fat = item.fat_total_g / serves;
  fat = fat.toFixed(2);
  let satfat = item.fat_saturated_g / serves;
  satfat = satfat.toFixed(2);
  let protein = item.protein_g / serves;
  protein = protein.toFixed(2);
  let carbs = item.carbohydrates_total_g / serves;
  carbs = carbs.toFixed(2);
  let fiber = item.fiber_g / serves;
  fiber = fiber.toFixed(2);
  let sodium = item.sodium_mg / serves;
  sodium = sodium.toFixed(2);
  let potassium = item.potassium_mg / serves;
  potassium = potassium.toFixed(2);
  let Cholesterol = item.cholesterol_mg / serves
  Cholesterol = Cholesterol.toFixed(2);
  return (
    <div>
      <Accordion.Body>
        <dt>Nutritional Info:</dt>
        <dd>Serving size:{servingSize} g</dd>
        <dd>Calories per serving :{calories}</dd>
        <dd>Sugar content per serving{sugar} g</dd>
        <dd>Total fat content per serving:{fat} g</dd>
        <dd>Saturated fat content per serving:{satfat}g</dd>
        <dd>Protein content per serving:{protein}g</dd>
        <dd>Total carbohydrates per serving:{carbs}g</dd>
        <dd>Fiber per serving: {fiber}g</dd>
        <dd>Sodium per serving:{sodium}mg</dd>
        <dd>Potassium per serving:{potassium}mg</dd>
        <dd>Cholesterol per serving:{Cholesterol}mg</dd>
      </Accordion.Body>
    </div>
  );
};
export default Nutrition;
