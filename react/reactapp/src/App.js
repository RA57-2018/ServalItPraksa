import React, {useState, useReducer} from "react";
import './App.css';
import Square from "./components/Square";


const App = () => {

  return (
    <div className="App">
      <Square />
      <Square />
      <Square />
    </div>
  );
};


export default App;
