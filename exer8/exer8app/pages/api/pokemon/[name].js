import fetch from 'node-fetch';

export default async (req, res) => {
  const {
    query: { name },
  } = req;

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const data = await response.json();
    
    res.status(200).json({
      name: data.name,
      sprite: data.sprites.front_default,
      type: data.types.map((type) => type.type.name)
    });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};
