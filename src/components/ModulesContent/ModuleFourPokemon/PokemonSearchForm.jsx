export const PokemonSearchForm = () => {
  const handleSubmit = (e, name) => {
    e.preventDefault();

    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(r => r.json())
      .then(r => {
        console.log(r);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label>
          Pokemon name
          <input type="text" />
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
};
