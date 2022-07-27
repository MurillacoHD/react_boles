import React, { useState } from 'react';



function Comptador() {

    const [valor, setValor] = useState(0);

    function menys() {
        setValor(valor-1);
    }

    function mes() {
        setValor(valor+1);
    }

    const estilSpan = {
        padding: "0 20px",
        border: "1px solid blue"
    }

    return (
        <>
            <button onClick={menys}>-</button>
            <span style={estilSpan}>{valor}</span>
            <button onClick={mes}>+</button>
        </>
    )
}


export default Comptador;
