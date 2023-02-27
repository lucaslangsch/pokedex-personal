const URL_DATA = 'https://pokeapi.co/api/v2/pokemon?limit=999&offset=0';
const URL_IMAGE = 'https://serebii.net/pokemon/art/'; // Numero do pokemon .png

async function getData(callback) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=999&offset=0');
  const data = await response.json();
  callback(data);
 };

export function formatData(callback) {
  getData(({ results }) => {
    const pokemonList = results.map((pokemon, index) => {
      const number = String(index + 1).padStart(3, '0');
      return {
        name: pokemon.name,
        number, // Chave e valor iguais, não precisa fazer number: number

      };
    });
    callback(pokemonList);
  });
};