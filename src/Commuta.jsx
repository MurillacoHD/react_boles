import  React, {useState} from 'react';



function Commuta(){

    const [actiu, setActiu] = useState(false);
    
    function clica(){
        setActiu( !actiu );
    }

    let estils = {
        width: "40px",
        height: "40px",
        backgroundColor: actiu ? "orange" : "gray",
        borderRadius: "50%",
        display: "inline-block"
    }

    return (
        <>
            <div onClick={clica} style={estils}></div>
        </>
    )
}


export default Commuta;
