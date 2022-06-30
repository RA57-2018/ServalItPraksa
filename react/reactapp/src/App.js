import React, { useState } from "react";
import './App.css';
import Square from "./components/Square";

function App(){

  const value = [
  { code: 1, name: 'Square1' },
  { code: 2, name: 'Square2' },
  { code: 3, name: 'Square3' }
  ];

  const [squareValues, setValues] = useState();

  const handleOnClick = (value) => {
    setValues(value);  
  };

  return (
    <div className="App">
      {
        value.map((values, index) => {                    //nesto kao if: values.code to je 1,2,3 da li je jednako selektovanoj vrednosti, ako jeste vrati boolean
          return <Square key={index} values={values.code} isSelected={values.code === squareValues} squareValues={squareValues} handleClick={handleOnClick} /> 
        })              //index=0,1,2   //values=1,2,3     //ako je vrednost 1,2,3 jednaka squareValues iz useState(onaj na kome je kliknuto) onda je true  //squareValues koristimo kao brojac u square kompoenti  //handleClick je funkcija gde namestamo vrednost squareValues klikom na odredjeni box
      }                 
    </div>
  );

};

export default App;

  // [
  //   { code: 1, name: 'Square1' },
  //   { code: 2, name: 'Square2' },
  //   { code: 3, name: 'Square3' }
  // ]

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
