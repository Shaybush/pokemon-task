import axios from "axios";
import { useEffect, useState } from "react";

type PokemonCardProps = {
  name: string;
  image: string;
};

const Card = ({ name, image }: PokemonCardProps) => {
  const [pokemons, setPokemons] = useState<PokemonCardProps[]>([]);

  const getPokemons = async () => {
    try {
      const pokemon = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=50"
      );
      const pokemons = pokemon.data.results;
      console.log(pokemons);

      const selectedPokemons: PokemonCardProps[] = [];
      const usedIndexes = new Set<number>();

      while (selectedPokemons.length < 3) {
        const randomIndex = Math.floor(Math.random() * pokemons.length);

        if (!usedIndexes.has(randomIndex)) {
          usedIndexes.add(randomIndex);

          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemons[randomIndex].name}`
          );
          selectedPokemons.push({
            name: pokemons[randomIndex].name,
            image: response.data.sprites.other.dream_world.front_default,
          });
        }
      }
      setPokemons(selectedPokemons);
    } catch (error) {
      console.error("Error has occurred!", error);
    }
  };
  

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      {pokemons.map((pokemon, index) => (
        <div
        key={index}
        className="py-10 flex flex-col items-center justify-center min-h-[35vh] bg-red-950"
      >
        <img src={pokemon.image} alt={''} className="w-32 h-32 object-contain mb-4" />
        <h1 className="text-white text-lg font-bold flex items-center">{pokemon.name}</h1>
      </div>
      ))}
    </>
  );
};

export default Card;
