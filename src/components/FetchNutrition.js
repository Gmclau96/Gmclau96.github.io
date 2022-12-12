import React, { useEffect, useState, useCallback } from "react";
import Nutrition from "./Nutrition";
import BarChart from "./NutritionChart";

const FetchData = ({ query }) => {
  const [nutrition, setNutrition] = useState({
    sugar_g: " ",
    fiber_g: " ",
    serving_size_g: " ",
    sodium_mg: " ",
    name: " ",
    potassium_mg: " ",
    fat_saturated_g: " ",
    fat_total_g: " ",
    calories: " ",
    cholesterol_mg: " ",
    protein_g: " ",
    carbohydrates_total_g: " ",
  });
  let [chartData, setChartData] = useState({
    labels: ["sugar", "fiber", "saturated fat", "total fat", "protein"],
    datasets: [
      {
        label: "per serving in g",
        data: [1, 0, 1, 0, 1],
        backgroundColor: [
          "#215DCD",
          "#21CD43",
          "#C521CD",
          "#CD7421",
          "#CD2131",
        ],
      },
    ],
  });

  const fetchData = useCallback(() => {
    const url =
      "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=" + query;
    console.log(url);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0aa13833c1mshe1e1d709bef2fbfp100af1jsn2a9e34b68d46",
        "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((incomingData) => {
        if (incomingData.items.length !== 0) {
        }
        var totalNutrition = {
          sugar_g: 0,
          fiber_g: 0,
          serving_size_g: 0,
          sodium_mg: 0,
          potassium_mg: 0,
          fat_saturated_g: 0,
          fat_total_g: 0,
          calories: 0,
          cholesterol_mg: 0,
          protein_g: 0,
          carbohydrates_total_g: 0,
        };
        //loop ingredients and add the nutritional info together
        for (var i = 0; i < incomingData.items.length; i++) {
          totalNutrition.sugar_g += incomingData.items[i].sugar_g;
          totalNutrition.fiber_g += incomingData.items[i].fiber_g;
          totalNutrition.serving_size_g += incomingData.items[i].serving_size_g;
          totalNutrition.sodium_mg += incomingData.items[i].sodium_mg;
          totalNutrition.potassium_mg += incomingData.items[i].potassium_mg;
          totalNutrition.fat_saturated_g +=
            incomingData.items[i].fat_saturated_g;
          totalNutrition.fat_total_g += incomingData.items[i].fat_total_g;
          totalNutrition.calories += incomingData.items[i].calories;
          totalNutrition.cholesterol_mg += incomingData.items[i].cholesterol_mg;
          totalNutrition.protein_g += incomingData.items[i].protein_g;
          totalNutrition.carbohydrates_total_g +=
            incomingData.items[i].carbohydrates_total_g;
        }
        setNutrition(totalNutrition);
        //gets serving size on selected recipe
        let activeAccordion = "";
        let serves = 0;
        activeAccordion = document.querySelector(
          'button[aria-expanded="true"]'
        );
        if (activeAccordion !== null) {
          let parent = activeAccordion.closest(".accordion-item");
          serves = parent.querySelectorAll(".serves")[0].innerHTML;
        }
        setChartData({
          labels: ["sugar", "fiber", "saturated fat", "total fat", "protein"],
          datasets: [
            {
              label: "per serving in g",
              data: [
                totalNutrition.sugar_g / serves,
                totalNutrition.fiber_g / serves,
                totalNutrition.fat_saturated_g / serves,
                totalNutrition.fat_total_g / serves,
                totalNutrition.protein_g / serves,
              ],
              backgroundColor: [
                "#215DCD",
                "#21CD43",
                "#C521CD",
                "#CD7421",
                "#CD2131",
              ],
            },
          ],
        });
      })
      .catch((err) => console.error(err));
  }, [query]);
  useEffect(() => {
    fetchData();
  }, [fetchData, query]);
  return (
    <div>
      <Nutrition item={nutrition} />
      <BarChart data={chartData} />
    </div>
  );
};
export default FetchData;
