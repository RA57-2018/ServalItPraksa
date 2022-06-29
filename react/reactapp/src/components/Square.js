import React,{useState, useReducer} from "react";

function Square(){

    const [counter, setCounter] = useState(1);

    let iterator = () => {
        setCounter(counter + 1);
    };

    return (
           <div className="Square">
            <div className="counter">
                {counter}
            </div>
           </div> 
        
    );
}


export default Square;