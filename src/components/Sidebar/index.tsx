import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Sidebar = () => {
  const gamesPattern = [
    {
      teamName: "RNG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      teamName: "JDG",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      teamName: "Pain",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      teamName: "INTZ",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      teamName: "INTZ",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      teamName: "INTZ",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      teamName: "INTZ",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
    {
      teamName: "INTZ",
      teamLogo: "",
      gameDate: "Sexta feira",
      championship: "Mundial Internacional",
      gameHour: "20:00",
    },
  ];
  return (
    <Flex
      bg="brand"
      w={["100%", "100%", "25%", "25%"]}
      h="100vh"
      flexDirection="column"
      justifyContent="space-around"
      overflow="auto"
    >
      {gamesPattern.map((gamePattern) => (
        <Flex
          key={null}
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
                RGE
              </Text>
            </Box>
            <Text fontWeight="500">vs</Text>
            <Box>
              <Avatar size="sm" />
              <Text fontWeight="bold" lineHeight="30px" fontSize="20px">
                JDG
              </Text>
            </Box>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};
