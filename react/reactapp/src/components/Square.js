import React,{useState} from "react";

function Square(){

    const [counter, setCounter] = useState();
    const [isActive, setIsActive] = useState(false);
    const countArr = [1, 2, 3];

    let iterator = () => {
        handleClick();
        handleClickNumber();
    };
    
    const handleClick = () => {
        setIsActive(current => !current);
        setIsActive(true); 
    };

    const handleClickNumber = () => {
        for(counter in countArr.length){    
            setCounter(counter);
        }
        console.log(counter);
    };

    return (
           <div className="Square" style={{backgroundColor: isActive ? 'red' : 'blue'}} onClick={iterator} >
             {counter}
           </div> 
    );
}


export default Square;