// Base URL for Pokémon API
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Fetch Pokémon data
async function fetchPokemonData(pokemonName) {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/squirtle');
    const data = await response.json();

    console.log(`Name: ${data.name}`);
    console.log(`Base Experience: ${data.base_experience}`);
  } catch (error) {
    console.error('Error fetching Squirtle data:', error.message);
  }
}

fetchPokemonData("squirtle");

//Fetch and log the name and types of Pikachu.
async function fetchPikachuData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await response.json();

    console.log("Name:", data.name);
    const types = data.types.map((typeInfo) => typeInfo.type.name);
    console.log("Types:", types.join(", "));
  } catch (error) {
    console.error("Error fetching Pikachu data:", error);
  }
}
fetchPikachuData();
//task 3

async function fetchJigglypuffData() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/jigglypuff"
    );
    const data = await response.json();

    console.log("Name:", data.name);
    console.log("Weight:", data.weight);
  } catch (error) {
    console.error("Error fetching Jigglypuff data:", error);
  }
}

fetchJigglypuffData();
// task 4
async function fetchMeowthData() {
    try {
        const response =await fetch('https://pokeapi.co/api/v2/pokemon/jigglypuff');
        const data = await response.json
        console.log ('Name:', data.name);
        console.log ('Height:', data.height);
        console.log ('weight:', data.weight);
    }catch (error) {
        console.log ('Error fetching Meowth data:', error);
    }
}
fetchMeowthData