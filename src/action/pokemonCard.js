import React from 'react';
import '../pokemonCard.css';

function PokemonCard({ name }) {
    return (
        <div className="pokemon-card">
            <h2>{name}</h2>
        </div>
    );
}

export default PokemonCard();
