export const PokemonInfo = ({ pokemon }) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
    .then(r => r.json())
    .then(pokemon => {
      this.setState({ pokemon });
    })
    .catch(error => {
      console.log(error);
    });
  return (
    <>
      <p>Name is: {pokemon.name}</p>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt="poke"
      />
    </>
  );
};
