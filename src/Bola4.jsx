import  React, {useState} from 'react';



function Bola4(){

    const [actiu, setActiu] = useState(0);
    

    function resta(){
        setActiu(actiu-1);
    }

    function suma(){
        setActiu(actiu+1);
    }

    let estils = {
        width: "60px",
        height: "20px",
        backgroundColor: "gray",
        display: "inline-block",
    }

    return (
        <>
            <button onClick={resta}>-</button>
            <span  style={estils}>{actiu}</span>
            <button onClick={suma}>+</button>
        </>
    )
}


export default Bola4;
