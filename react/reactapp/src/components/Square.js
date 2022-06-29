import React,{useState} from "react";

function Square(){

    const [counter, setCounter] = useState();
    const [isActive, setIsActive] = useState(false);
    //let code = 0;

    let iterator = () => {
        handleClick();
        handleClickNumber();
    };
    
    const handleClick = () => {
        setIsActive(current => !current);
        setIsActive(true); 
    };

    const handleClickNumber = () => {
        setCounter(counter);
    };

    return (
           <div className="Square" style={{backgroundColor: isActive ? 'red' : 'blue'}} onClick={iterator}>
             {counter}
           </div> 
    );
}


export default Square;