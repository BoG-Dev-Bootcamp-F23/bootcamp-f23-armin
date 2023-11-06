import fetch from 'node-fetch';

export default async (req, res) => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const data = await response.json();
    const pokemon = data.results[Math.floor(Math.random() * data.results.length)];
    
    const pokemonResponse = await fetch(pokemon.url);
    const pokemonData = await pokemonResponse.json();
    
    res.status(200).json({
      name: pokemonData.name,
      sprite: pokemonData.sprites.front_default,
      type: pokemonData.types.map((type) => type.type.name)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
