import './App.css'

import Texte from './Texte';
import Commuta from './Commuta';




function App() {
  const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur et reprehenderit doloremque, nesciunt dicta ratione? Quam alias reiciendis totam architecto saepe nemo, perferendis voluptatem qui maxime temporibus officiis explicabo!";

  return (
    <>
      <h1>Hola que tal</h1>
      <Texte contingut={lorem} mida="12px"/>
      <Commuta  />
    </>
  )
}

export default App;
