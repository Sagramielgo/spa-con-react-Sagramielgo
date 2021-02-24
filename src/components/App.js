import '../stylesSheet/App.scss';
import data from '../data/data.json';
import PokemonList from './PokemonList.js';
import React, { useState } from 'react';

function App() {
  const [state] = useState(data);
  const [colorData, setColor] = useState('');
  function handleShowColor() {
    setColor('bgColor');
  }

  function handleRemoveColor() {
    setColor('');
  }
  return (
    <div className={colorData}>
      <PokemonList
        show={handleShowColor}
        hide={handleRemoveColor}
        pokemons={state}
      />
    </div>
  );
}

export default App;
