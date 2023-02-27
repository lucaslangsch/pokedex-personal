export const createDiv = (pokemonList) => {
  return pokemonList.map(
    pokemon => `
    <div class="pokemon">
    <span class="pokemon-number">${pokemon.number}</span>
    <p class="pokemon-name">${pokemon.name}</p>
    <img src="${pokemon.image}" alt="${pokemon.image}" />
    </div>
    `
  ).join('');
};