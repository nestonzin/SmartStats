import { Avatar, Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import api from "../../services/api";

interface Match {
  type: string;
  strategy: {
    count: number;
    type: string;
  };
  teams: Team[];
}

interface Team {
  name: string;
  code: string;
  image: string;
  result: {
    gameWins: number;
  };
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

  return (
    <Flex flexDirection="column" w="100%" justifyContent={["flex-start"]}>
      <Box border="1px solid" w="100%" textAlign="center">
        <Text fontWeight={["700"]}>ULTIMAS PARTIDAS</Text>
      </Box>
      <Flex
        flexDirection={["column", "column", "row", "row"]}
        justifyContent={["center"]}
      >
        {isLoading ? (
          <Spinner color="black" />
        ) : (
          completedEvents?.map((completedEvent, index) => (
            <Flex
              flexDirection={["column"]}
              gap={[".2rem"]}
              alignItems={["center"]}
              justifyContent={["center"]}
              p={["1rem"]}
              border={["1px"]}
              w={["100%"]}
              key={`${completedEvent}-${index}`}
            >
              <Text fontWeight={["900"]}>Ganhador</Text>
              <Avatar src={getWinner(completedEvent)?.image} />
              <Text fontWeight={["900"]}>
                {getWinner(completedEvent)?.result.gameWins}
              </Text>
              <Text fontWeight={["900"]}>{completedEvent.league.name}</Text>
              <Text fontWeight={["700"]}>
                {new Date(completedEvent.startTime).toLocaleString("pt-BR", {
                  calendar: "long",
                })}
              </Text>
              <Flex
                w="100%"
                gap={["1rem"]}
                justifyContent={["space-between"]}
                alignItems={["center"]}
                p="1rem"
              >
                <Flex alignItems={["center"]} gap={[".5rem"]}>
                  <Avatar
                    src={completedEvent.match.teams[0].image}
                    size={"sm"}
                  />
                  <Text fontWeight={["900"]}>
                    {completedEvent.match.teams[0].code}
                  </Text>
                </Flex>
                <Text fontWeight={["700"]} fontSize={["1rem"]}>
                  VS
                </Text>
                <Flex alignItems={["center"]} gap={[".5rem"]}>
                  <Text fontWeight={["900"]}>
                    {completedEvent.match.teams[1].code}
                  </Text>
                  <Avatar
                    src={completedEvent.match.teams[1].image}
                    size={"sm"}
                  />
                </Flex>
              </Flex>
            </Flex>
          ))
        )}
      </Flex>
    </Flex>
  );
};
