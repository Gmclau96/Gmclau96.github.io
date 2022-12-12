import React, { useState } from "react";
import FetchNutrition from "./FetchNutrition";
import MenuContext from "./MenuContext";
import Accordion from "react-bootstrap/Accordion";
import Menu from "./Menu";
import FoodItem from "./FoodItem";
import Reviews from "./reviews";

const DisplayFoodItems = ({ foodList }) => {
  //sets menu
  const [selectedItems, setSelectedItems] = useState([]);
  const menu = (e, selectedItem) => {
    setSearchField(selectedItem.ingredients)
    //Checks if menu item exists, adds if doesnt
    const found = selectedItems.some(el => el.name === selectedItem.name);
    if (!found) {
      let newState = [...selectedItems, selectedItem];
      console.log(found);
      setSelectedItems(newState);
    } else {
      alert("Item is already on the menu!")
    }
  };
  //gets ingredients to send to api
  const [searchField, setSearchField] = useState("");
  const nutrient = (e, selectedItem) => {
    setSearchField(selectedItem.ingredients)
  };
  return (
    <>
      <Accordion class="accordion">
        <h2>Recipes</h2>
        {foodList.map((food, index) => {
          return (
            <Accordion.Item eventKey={index} key={index}
              onClick={(e) => nutrient(e, food)}>
              <FoodItem food={food} />
              <div>
                <FetchNutrition query={searchField} />
                <Accordion.Body>
                  <hr></hr>
                  <button type="button" class="btn btn-primary" onClick={(e) => menu(e, food)}>Add to menu</button>
                  <hr></hr>
                  <Reviews />
                </Accordion.Body>
              </div>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <MenuContext.Provider value={[selectedItems, setSelectedItems]}>
        <Menu />
      </MenuContext.Provider>
    </>
  );
};
export default DisplayFoodItems;
