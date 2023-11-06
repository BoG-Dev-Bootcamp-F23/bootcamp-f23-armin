import fetch from 'node-fetch';

export default async (req, res) => {
  const {
    query: { name },
  } = req;

  try {
    const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name.toLowerCase()}`);
    const speciesData = await speciesResponse.json();

    const evolutionChainResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionChainData = await evolutionChainResponse.json();

    const findEvolutionStep = (evolutionData, pokemonName) => {
      if (evolutionData.species.name.toLowerCase() === pokemonName.toLowerCase()) {
        if (evolutionData.evolves_to.length > 0) {
          return evolutionData.evolves_to[0].species.name;
        } else {
          return pokemonName;
        }
      }

      for (let i = 0; i < evolutionData.evolves_to.length; i++) {
        const nextEvolution = findEvolutionStep(evolutionData.evolves_to[i], pokemonName);
        if (nextEvolution) {
          return nextEvolution;
        }
      }

      return null;
    };

    const evolutionStep = findEvolutionStep(evolutionChainData.chain, name);

    if (evolutionStep) {
      res.status(200).json({ evolutionStep });
    } else {
      res.status(404).json({ message: 'Pokémon not found in the evolution chain' });
    }
  } catch (error) {
    res.status(error.status || 500).json({ message: 'Error retrieving Pokémon evolution data' });
  }
};
