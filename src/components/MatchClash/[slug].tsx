import { Flex, Avatar, Text, Box } from "@chakra-ui/react";
import { LiveGameInfos } from "../../hooks/LiveGameInfos";
import { GameDetails } from "../../modules/PersistendDetailsTypes";

type Props = {
  gameDetails: GameDetails;
};

export const MatchClash = () => {
  // const {} = LiveGameInfos();

  return (
    <Flex h="25vh" alignItems="center" justifyContent="space-around">
      <Flex
        bg="#B3B0B8"
        w="100%"
        h="100%"
        justifyContent={["space-around"]}
        alignItems="center"
      >
        {/* <Avatar size={"xl"} src={blueTeam.image} /> */}
        <Box textAlign="center">
          <Text>VS</Text>
          <Text>ao vivo</Text>
        </Box>
        {/* <Avatar size={"xl"} src={redTeam.image} /> */}
      </Flex>
    </Flex>
  );
};
