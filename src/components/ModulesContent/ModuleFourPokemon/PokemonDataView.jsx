export const PokemonDataView = ({pokemon}) => {
  return (
    <>
      <p>Name is: {pokemon.name}</p>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt="poke"
        width="240px"
      />
      <ul>
        {pokemon.abilities.map(ability => {
            return (<li key={ability.ability.name}>{ability.ability.name}</li>)
        })}
      </ul>
    </>
  );
};
