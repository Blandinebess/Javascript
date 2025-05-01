// URL for Berry API
const BERRY_URL = "https://pokeapi.co/api/v2/berry/";

// Fetch and log berry flavor
async function fetchBerryFlavor(berryId) {
  try {
    const response = await fetch(`${BERRY_URL}${berryId}`);
    const data = await response.json();

    console.log(`Berry Name: ${data.name}`);
    console.log(`Flavor: ${data.flavors[0].flavor.name}`);
  } catch (error) {
    console.error(`Error fetching berry flavor:`, error.message);
  }
}

fetchBerryFlavor(1); // Example for first Berry


async function fetchCharmanderAbilities() {
try {
const response = await fetch('https://pokeapi.co/api/v2/pokemon/charmander');
const data = await response.json();

const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name);
console.log('Charmander Abilities:', abilities.join(', '));
} catch (error) {
console.error('Error fetching Charmander data:', error);
}
}

fetchCharmanderAbilities();

async function fetchBulbasaurMoves() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    const data = await response.json();

    const moveCount = data.moves.length;
    console.log("Bulbasaur can learn", moveCount, "moves.");
  } catch (error) {
    console.error("Error fetching Bulbasaur data:", error);
  }
}

fetchBulbasaurMoves();