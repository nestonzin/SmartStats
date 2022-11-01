import { Avatar, Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import api from "../../services/api";

interface Match {
  type: string;
  strategy: {
    count: number;
    type: string;
  };
  teams: {
    name: string;
    code: string;
    image: string;
    result: {
      gameWins: number;
    };
  }[];
}

interface ICompletedGames {
  startTime: Date;
  match: Match;
  blockName: string;
  league: {
    name: string;
  };
}

export const LastMatches = () => {
  const [completedEvents, setGetCompletedEvents] =
    useState<ICompletedGames[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getWinner = (game: ICompletedGames) => {
    if (completedEvents) {
      return game.match.teams.find(
        (team) => team.result.gameWins === game.match.strategy.count
      );
    }
  };

  useEffect(() => {
    setIsLoading(true);
    async function getCompletedGames() {
      const response = await api.get("/getCompletedEvents", {
        params: {
          hl: "pt-BR",
        },
      });
      setGetCompletedEvents(response.data.data.schedule.events.slice(0, 2));
      setIsLoading(false);
    }
    getCompletedGames();
  }, []);

  console.log("peguei os jogos", completedEvents);
  return (
    <Flex
      flexDirection="column"
      w="100%"
      h="40vh"
      justifyContent={["flex-start"]}
    >
      <Box border="1px solid" w="100%" textAlign="center">
        <Text>ULTIMAS PARTIDAS</Text>
      </Box>
      <Flex flexDirection={["column", "column", "row", "row"]}>
        {isLoading ? (
          <Spinner />
        ) : (
          completedEvents?.map((completedEvent, index) => (
            <Flex
              flexDirection={["column"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              p={["1rem"]}
              border={["1px"]}
              w={["100%"]}
              key={`${completedEvent}-${index}`}
            >
              <Text>Ganhador</Text>
              <Avatar src={getWinner(completedEvent)?.image} />
              <Text>{getWinner(completedEvent)?.result.gameWins}</Text>
              <Text>{completedEvent.league.name}</Text>
              <Text>
                {" "}
                {new Date(completedEvent.startTime).toLocaleString("pt-BR", {
                  calendar: "long",
                })}
              </Text>
              <Flex>
                <Avatar src={completedEvent.match.teams[0].image} />
                <Text>{completedEvent.match.teams[0].name}</Text>
                <Avatar src={completedEvent.match.teams[1].image} />
                <Text>{completedEvent.match.teams[1].name}</Text>
              </Flex>
            </Flex>
          ))
        )}
      </Flex>
    </Flex>
  );
};
