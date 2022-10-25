import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Sidebar = () => {
  const gamesPattern = [
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      blueTeam: "RNG",
      redTeam: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
  ];
  return (
    <Flex
      bg="brand"
      w={["100%", "100%", "100%", "25%"]}
      h="calc(100vh - 5rem)"
      flexDirection="column"
      justifyContent="space-between"
      overflowY="scroll"
    >
      {gamesPattern.map((gamePattern, index) => (
        <Flex
          key={`${gamePattern.blueTeam}-${index}`}
          flexDirection="column"
          alignItems="center"
          bg="#D9D9D9"
          p="1rem"
          cursor="pointer"
          border="1px"
        >
          <Text fontWeight="500">{gamePattern.gameDate}</Text>
          <Text fontWeight="500">{gamePattern.championship}</Text>
          <Text fontWeight="500">{gamePattern.gameHour}</Text>
          <Flex justifyContent="space-between" w="100%" alignItems="center">
            <Box>
              <Avatar size="sm" />
              <Text fontWeight="bold" lineHeight="30px" fontSize="20px">
                {gamePattern.blueTeam}
              </Text>
            </Box>
            <Text fontWeight="500">vs</Text>
            <Box>
              <Avatar size="sm" />
              <Text fontWeight="bold" lineHeight="30px" fontSize="20px">
                {gamePattern.redTeam}
              </Text>
            </Box>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
