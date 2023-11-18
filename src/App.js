import React, { useState, useEffect } from 'react';
import PokemonCard from './action/pokemonCard';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        if (!response.ok) {
          throw new Error('Failed to fetch Pokemon list');
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
        setError('An error occurred while fetching Pokemon list.');
      }
    };

    fetchPokemonList();
  }, []); // Empty dependency array means this effect runs once on mount

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
      <div className="App">
        <h1>Pokemon List</h1>
        <div className="pokemon-list">
          {pokemonList.map((pokemon, index) => (
              <PokemonCard key={index} name={pokemon.name} />
          ))}
        </div>
      </div>
  );
}

export default App;
