import React from "react";

function Square({handleClick, isSelected, values, squareValues}){
                //inicijalizujemo parametre koje prosledjujemo iz map funkcije
    return (        //moze i div umesto button
           <div className="Square" onClick={() => handleClick(values)} style={{backgroundColor: isSelected ? 'red' : 'blue'}}>
             {values === 2 && squareValues} 
           </div> 
    );
}                                       //onClick pozivamo handleClick iz map funkcije da bismo oznacili box koji je kliknut prosledjujemo values jer smo to stavili kao parametar u definiciji funkcije
                                        //isSelected je tipa true ili false, u zavisnosti od toga bice odredjene boje, on bi trebao da nosi koji je box selektovan
                                        //broj boxa se namesta tako sto uporedjujemo values sa 2, da se u drugom boxu prikaze broj selektovanog boxa, ako je jednako onda se upise 
                                        //squareValues u tu drugu karticu, squareValues nosi broj selektovane kartice


export default Square;

/*const [counter, setCounter] = useState();
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
        for(let i=0; i<countArr.length; i++){
            setCounter(counter);
        }
        // for(counter in countArr.length){  
        //     setCounter(counter);
        // }
        console.log(counter);
    };
    style={{backgroundColor: isActive ? 'red' : 'blue'}}
    */