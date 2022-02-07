import PokemonList from "./components/PokemonList";
import SearchForm from "./components/SearchForm";
import pokemons from "./pokedex.json";

const onSearch = (name, type) => {
  console.log({ name: name, type: type });
  return { name: name, type: type };
};

function App() {
  const first50el = pokemons.pokemon.slice(0, 50);
  return (
    <div className="App">
      <SearchForm onSearch={onSearch} />
      <PokemonList pokemons={first50el}></PokemonList>
    </div>
  );
}

export default App;
