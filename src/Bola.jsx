import  React, {useState} from 'react';



function Bola(){

    const [actiu, setActiu] = useState(false);
    
    function clica(){
        setActiu( !actiu );
    }

    let estils = {
        width: "40px",
        height: "40px",
        borderRadius: "100%",
        display: "inline-block",
        margin: "5px",
        backgroundColor: actiu ? "orange" : "gray"
    }

    return (
        <>
            <div onClick={clica} style={estils}></div>
        </>
    )
}


export default Bola;
