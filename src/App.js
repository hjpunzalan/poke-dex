import React from 'react';
import Card from './card';
import './App.css';

const pokemon = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

function App() {
  return (
    <div className="App">
    <h1 className="heading-1">Pokedex</h1>
    {pokemon.map( el => {
      return <Card 
      id={el.id} 
      name={el.name} 
      type={el.type} 
      experience={el.base_experience} />
    })}
    </div>
  );
}

export default App;
