import React, { Component } from 'react'

export default class Pokedex extends Component {
    render() {
        const poker = this.props.pokemon.map(pokeElem => {
            return (
                <li key={pokeElem.id}>
                    <h2>{pokeElem.name}</h2>
                    <img src={pokeElem.image} alt={pokeElem.name} />
                    <p>
                        <strong>Type:</strong> {pokeElem.type}
                    </p>
                </li>
            );
        });
        return (
            <div>{poker}</div>
        )
    }
}

Pokedex.defaultProps = {
    pokemon: [
        {
            id: 1,
            name: "Charmander",
            type: "fire",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
            id: 2,
            name: "Squirtle",
            type: "water",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
            id: 3,
            name: "Butterfree",
            type: "flying",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        },
        {
            id: 4,
            name: "Rattata",
            type: "normal",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
        },
        {
            id: 5,
            name: "Metapod",
            type: "bug",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
        }
    ]
}