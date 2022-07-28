import  React, {useState} from 'react';



function Commuta_b(){

    const [actiu, setActiu] = useState(false);
    
    function clica(){
        setActiu( !actiu );
    }

    function boton(){
        setActiu(true);
    }

    function boton1(){
        setActiu(false);
    }

    let estils = {
        width: "40px",
        height: "40px",
        backgroundColor: actiu ? "red" : "gray",
        borderRadius: "50%",
        display: "inline-block"
    }

    return (
        <>
            <div onClick={clica} style={estils}></div>
            <div onClick={clica} style={estils}></div>
            <div onClick={clica} style={estils}></div>
            <div onClick={clica} style={estils}></div>
            <div onClick={clica} style={estils}></div>

            <button onClick={boton}>Poner Rojo</button>
            <button onClick={boton1}>Quitar Rojo</button>
        </>
    )
}


export default Commuta_b;
