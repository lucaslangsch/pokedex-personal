const URL_DATA = 'https://pokeapi.co/api/v2/pokemon?limit=999&offset=0';
const URL_IMAGE = 'https://serebii.net/pokemon/art/'; // Numero do pokemon + .png
const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/'; // Número do pokemeon

export async function getData(callback) {
  const response = await fetch(URL_DATA);
  const data = await response.json();
  callback(data);
 };

export async function getType(type) {
  const response = await fetch(URL_POKEMON + type);
  const data = await response.json();
  console.log(data.types[0].type.name);
  // return data.types[0].type.name;
 };

export function formatData(callback) {
  getData(({ results }) => {
    const pokemonList = results.map((pokemon, index) => {
      // const typePokemon = getType(index + 1)
      const number = String(index + 1).padStart(3, '0');
      return {
        // type: typePokemon,
        name: pokemon.name,
        number: '#' + number,
        image: URL_IMAGE + number + '.png'
      };
    });
    callback(pokemonList);
  });
};
