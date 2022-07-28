
import { useState } from 'react';

import './App.css'

import Texte from './Texte';
import Commuta from './Commuta';
import Commuta_b from './Commuta_b';
import Bola4 from './Bola4';
import Bola5 from './Bola5';


function App() {
  const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur et reprehenderit doloremque, nesciunt dicta ratione? Quam alias reiciendis totam architecto saepe nemo, perferendis voluptatem qui maxime temporibus officiis explicabo!";

  const [index, setIndex] = useState(MIN);



  return (
    <>
      <h1>Hola que tal</h1>
      <Texte contingut={lorem} mida="12px"/>
      <h3>Exercici-l</h3>
      <Commuta  />
      <Commuta  />
      <Commuta  />
      <Commuta  />
      <Commuta  />
      <h3>Exercici-1b</h3>
      <Commuta_b  />
      <h3>Exercici-4</h3>
      <Bola4  />
      <h3>Exercici-5</h3>
      <Bola5  />
    </>
  )
}

export default App;
