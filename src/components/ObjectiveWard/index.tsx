import { Text, Flex, Image, Avatar, Icon } from "@chakra-ui/react";
import { HolySword, Tower, SettingOne, Duck } from "@icon-park/react";
import { Coin } from "phosphor-react";

export const ObjectiveWard = () => {
  const teamStatus = [
    {
      icon: SettingOne,
      count: "0",
    },
    {
      icon: Duck,
      count: "0",
    },
    {
      icon: Tower,
      count: "0",
    },
    {
      icon: Coin,
      count: "0",
    },
    {
      icon: HolySword,
      count: "5",
    },
  ];

  return (
    <Flex
      justifyContent={["space-between"]}
      p="1rem"
      flexDirection={["column", "row", "row", "row"]}
      alignItems="center"
    >
      <Flex gap="2rem">
        {teamStatus.map((teamStat, index) => (
          <Flex
            key={`${teamStat}-${index}`}
            flexDirection="column"
            alignItems="center"
          >
            <Icon as={teamStat.icon} w="1rem" h="1rem" />
            <Text>{teamStat.count}</Text>
          </Flex>
        ))}
      </Flex>
      <Flex gap="2rem">
        {teamStatus.map((teamStat: any, index) => (
          <Flex
            key={`${teamStat}-${index}`}
            flexDirection="column"
            alignItems="center"
          >
            <Icon as={teamStat.icon} w="1rem" h="1rem" />
            <Text>{teamStat.count}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
