import useGames from "../hooks/useGames";




const GameGrid = () => {
  const {games, loading, error} = useGames();

  return (
    <ul>
      {loading && <li>Loading...</li>}
      {error && <li>{error}</li>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
