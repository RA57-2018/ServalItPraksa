import React, { useState } from "react";
import './App.css';
import Square from "./components/Square";

const App = () => {

 /* const values = [
  { code: 1, name: 'Square1' },
  { code: 2, name: 'Square2' },
  { code: 3, name: 'Square3' }
  ];
*/
  const [value, setValues] = useState([
    { code: 1, name: 'Square1' },
    { code: 2, name: 'Square2' },
    { code: 3, name: 'Square3' }
  ]);

  // let counter = 0;

  // const handleClickOnNumber = () => {
  //   console.log(value.code);  //1,2,3 ispise
  //   setValues(current => !current);
  //   for(counter in value.code){
  //     counter = value.code;
  //     console.log(counter);
  //     setValues(counter);
  //   }
  // };

  return (
    <div className="App">
      {
        value.map((values, index) => {
          console.log(values.code);
          return <Square key={index} />
        })
      }
    </div>
  );

  /*return (
    <div className="App">
      {
        values.map((value, index) => {
          return <Square key={index} code/>
        })
      }
    </div>
  );
*/
  // const [value, setValue] = useState([
  //   {code:1, name: 'Square1'},
  //   {code:2, name: 'Square2'},
  //   {code:3, name: 'Square3'}
  // ]);

  // return (
  //   <div className="App">
  //       <Square />
  //       <Square />
  //       <Square />
  //   </div>
  // );

};

export default App;
