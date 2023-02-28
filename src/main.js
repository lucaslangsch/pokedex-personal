import { createDiv } from "./createDiv";
import { formatData, getType } from "./fetchFuntcions";

const pokemonLista = document.querySelector('.pokemon-list');
const input = document.querySelector('.input-pokemon');
let filterTerm = '';

input.addEventListener('keyup', () => {
  filterTerm = input.value;
  setDiv();
});

function setDiv() {
  formatData(async pokemonList => {
    const listFiltered = filterList(pokemonList);
    const template = await createDiv(listFiltered);
    pokemonLista.innerHTML = template;
    });
};

const filterList = (pokemonList) => {
  return pokemonList.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(filterTerm.toLowerCase());
  });
};

setDiv();
getType(1)