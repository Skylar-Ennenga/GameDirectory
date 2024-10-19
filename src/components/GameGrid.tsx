import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";




const GameGrid = () => {
  const {games, loading, error} = useGames();

  return (
    <SimpleGrid columns={{sm:1, md:2, lg:3 }} padding="10px" spacing={10}>
      {loading && <li>Loading...</li>}
      {error && <li>{error}</li>}
      {games.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
