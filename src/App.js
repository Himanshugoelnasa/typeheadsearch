import React from "react";
import AsyncExample from "./AsyncExample";

const App = () => {
  const fruits = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Typeahead Search Example</h1>
      <AsyncExample options={fruits} />
    </div>
  );
};


export default App;
