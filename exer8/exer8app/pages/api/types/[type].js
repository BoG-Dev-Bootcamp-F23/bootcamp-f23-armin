import fetch from 'node-fetch';

export default async (req, res) => {
  const {
    query: { type },
  } = req;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type.toLowerCase()}`);
    const data = await response.json();
    
    const pokemonList = data.pokemon.map((p) => p.pokemon.name);
    
    res.status(200).json(pokemonList);
  } catch (error) {
    res.status(error.status || 500).json({ message: 'Type not found' });
  }
};
