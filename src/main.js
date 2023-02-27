import { createDiv } from "./createDiv";
import { formatData } from "./fetchFuntcions";

const pokemonLista = document.querySelector('pokemon-list')

const pokemonCard = document.createElement('div')





function setDiv() {
  formatData(async pokemonList => {
    const template = await createDiv(pokemonList);
    console.log(template) // Aqui aparece no console
    pokemonCard.innerHTML = template // Aqui da erro de promisse
    pokemonLista.appendChild(pokemonCard)
  })
}
setDiv()