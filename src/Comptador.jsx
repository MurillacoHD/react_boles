import React, { useState } from 'react';



function Comptador(props) {

    const [valor, setValor] = useState(props.min);

    function menys() {
        if(valor>props.min){
            setValor(valor-1);
            props.funcio(valor-1)
        }
    }

    function mes() {
        if (valor<props.max){
            setValor(valor+1);
            props.funcio(valor+1)
        }
    }

    const estilSpan = {
        padding: "0 20px",
        border: "1px solid blue"
    }

    return (
        <>
            <button disabled={valor==props.min}onClick={menys}>-</button>
            <span style={estilSpan}>{valor}</span>
            <button disabled={valor>=props.max} onClick={mes}>+</button>
        </>
    )
}


export default Comptador;
