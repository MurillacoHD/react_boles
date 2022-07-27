
import { useState } from 'react';

import './App.css'

import Texte from './Texte';
import Commuta from './Commuta';
import Boles from './Boles'
import Boles5 from './Boles5'
import Comptador from './Comptador'
import Numero from './Numero'
import Trio from './Trio'

const MIN = 5;
const MAX = 20;

function App() {
  const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur et reprehenderit doloremque, nesciunt dicta ratione? Quam alias reiciendis totam architecto saepe nemo, perferendis voluptatem qui maxime temporibus officiis explicabo!";

  const [index, setIndex] = useState(MIN);



  return (
    <>
      <h1>Hola que tal</h1>
      <br />
      <Trio />

      <br />
      <Texte contingut={lorem} mida="12px" />
      <Comptador max={MAX} min={MIN} funcio={setIndex} />
      <Numero valor={index} />
      <br />
      <br />
      <Commuta />
      <Boles />
      <Boles5 />
    </>
  )
}

export default App;
