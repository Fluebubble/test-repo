export function fetchPokemon(pokemonName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(r => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(`NO POKEMON WITH NAME ${pokemonName}`));
  });
}
