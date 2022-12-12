import React from "react";
import Search from "./components/Search"
import "bootstrap/dist/css/bootstrap.min.css";
import { items } from "./data/data";
function App() {
  return (
    <div className="container">
      <h1>FEWD RECIPES</h1>
      <Search details={items} />
    </div>
  );
}
export default App;