// URL for Type API
const TYPE_URL = "https://pokeapi.co/api/v2/type/";

// Fetch and log type damage relations
async function fetchTypeData(typeId) {
  try {
    const response = await fetch(`${TYPE_URL}${typeId}`);
    const data = await response.json();

    console.log(`Type Name: ${data.name}`);
    console.log("Damage Relations:");
    console.log(
      `No Damage From: ${data.damage_relations.no_damage_from
        .map((type) => type.name)
        .join(", ")}`
    );
  } catch (error) {
    console.error(`Error fetching type data:`, error.message);
  }
}

fetchTypeData(1); // Example for type ID 1

async function fetchGengarStats() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/gengar");
    const data = await response.json();

    console.log("Gengar Base Stats:");
    data.stats.forEach((statInfo) => {
      console.log(`${statInfo.stat.name}: ${statInfo.base_stat}`);
    });
  } catch (error) {
    console.error("Error fetching Gengar data:", error);
  }
}
hp: 60
attack: 65
defense:60

fetchGengarStats();

async function fetchGyaradosSprite() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/gyarados");
    const data = await response.json();

    const spriteUrl = data.sprites.front_default;
    console.log("Gyarados Sprite URL:", spriteUrl);
  } catch (error) {
    console.error("Error fetching Gyarados data:", error);
  }
}

fetchGyaradosSprite();