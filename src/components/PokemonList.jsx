//lista szerűen megjeleníteni a pokemonokat
// propsként kapja a pokémonokat az app.jsben

import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  return (
    <div>
      {props.pokemons.map((pokemon) => {
        return (
          <Pokemon
            name={pokemon.name}
            img={pokemon.img}
            type={pokemon.type}
            key={pokemon.id}
          />
        );
      })}
    </div>
  );
};

export default PokemonList;
