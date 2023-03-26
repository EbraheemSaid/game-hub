import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameGridSkeleton from "./GameGridSkeleton";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, errors, isLoading } = useGames(selectedGenre);
  const skeletonarray = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
      >
        {isLoading &&
          skeletonarray.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameGridSkeleton />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
