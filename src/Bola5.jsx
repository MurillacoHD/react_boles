import  React, {useState} from 'react';



function Bola5(){

    const [actiu, setActiu] = useState(0);
    
    function clica(){
        setActiu( !actiu );
    }

    function boton(){
        setActiu(true);
        var valor = Math.floor ( Math.random() * 50 );
    }

    let estils = {
        width: "50px",
        height: "50px",
        backgroundColor: "deeppink",
        borderRadius: "50%",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "50px"
    }

    return (
        <>
            <div onClick={clica} style={estils}>0</div>
            <div onClick={clica} style={estils}>0</div>
            <div onClick={clica} style={estils}>0</div>

            <button onClick={boton}>Calcula</button>
        </>
    )
}

export default Bola5;