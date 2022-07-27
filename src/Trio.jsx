import {useState} from 'react';

import BolaNum from './BolaNum';


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


function Trio (){

    const [valor1, setValor1] = useState(1);
    const [valor2, setValor2] = useState(2);
    const [valor3, setValor3] = useState(3);

    function calcula(){
        setValor1(getRandomInt(1,49));
        setValor2(getRandomInt(1,49));
        setValor3(getRandomInt(1,49));
        
        //console.log("resultats: ", valor1, valor2, valor3)

    }

    return (
        <div>
            <BolaNum num={valor1} />
            <BolaNum num={valor2} />
            <BolaNum num={valor3} />
            <button onClick={calcula}>Calcula</button>
        </div>
    )
}

export default Trio;