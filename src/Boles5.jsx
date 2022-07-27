import  React, {useState} from 'react';



function Bola(){

    const [actiu, setActiu] = useState(false);
    
    function activa(){
        setActiu(true );
    }
 
    function desactiva(){
        setActiu(false );
    }
    let estils = {
        width: "40px",
        height: "40px",
        borderRadius: "100%",
        display: "inline-block",
        margin: "5px",
        backgroundColor: actiu ? "red" : "gray"
    }

    return (
        <>
        <div>
        <div style={estils}></div>
            <div style={estils}></div>
            <div style={estils}></div>
            <div style={estils}></div>
            <div style={estils}></div>
        </div>
     <button onClick={activa}>Activa</button>
     <button onClick={desactiva}>Desactiva</button>
        </>
    )
}


export default Bola;
