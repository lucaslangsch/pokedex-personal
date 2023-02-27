export const createDiv = (pokemonList) => {
  return pokemonList.map(
    pokemon => `
    <div> class="pokemon"
      <span class="pokemon-number">${pokemon.name}</span>
      <p class="pokemon-name">${pokemon.number}</p>
    </div>
    `
  ).join('');
};