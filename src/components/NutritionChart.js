import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

const BarChart = ({ data }) => {
  return (
    <>
      <AccordionBody>
        <Bar
          data={data}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Nutritional Data Per serving",
              },
              legend: {
                display: false,
              },
            },
          }}
        />
        <Pie
          data={data}
        />
      </AccordionBody>
    </>
  );
};
export default BarChart;