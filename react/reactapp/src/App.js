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
  const [value, setValue] = useState([
    { code: 1, name: 'Square1' },
    { code: 2, name: 'Square2' },
    { code: 3, name: 'Square3' }
  ]);

  /*const [number, setNumber] = useState();

  const handleClickNumber = (value) => {
    for(let i=1; i<3; i++){
      number = value[i].code;
      setNumber(number);
    }
  };*/

  return (
    <div className="App">
      {
        value.map((values, index) => {
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
