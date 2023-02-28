import {
  Avatar,
  Flex,
  Text,
  Wrap,
  WrapItem,
  Spinner,
  Link,
} from "@chakra-ui/react";
import { GetScheduleGames } from "../../hooks/GetScheduleGames";

export const ScheduleCard = () => {
  const { todayEvents, isLoading } = GetScheduleGames();
  console.log(todayEvents, "eventos de hj");
  return (
    <Wrap
      flexWrap={"wrap"}
      p="1rem"
      spacing="30px"
      justifyContent="center"
      paddingLeft="3rem"
    >
      {isLoading ? (
        <Spinner color="white" alignSelf="center" />
      ) : (
        todayEvents.map((todayEvent, index) => (
          <Link href={`/match/${todayEvent.match.id}`}>
            <WrapItem
              key={index}
              w="10rem"
              h="10rem"
              gap="1rem"
              bg="brand"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              boxShadow="base"
            >
              <Text>{todayEvent.league.name}</Text>
              <Flex gap="1rem">
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Avatar src={todayEvent.match.teams[0].image} size="sm" />
                  <Text>{todayEvent.match.teams[0].code}</Text>
                </Flex>
                <Text>vs</Text>
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Avatar src={todayEvent.match.teams[1].image} size="sm" />
                  <Text>{todayEvent.match.teams[1].code}</Text>
                </Flex>
              </Flex>
            </WrapItem>
          </Link>
        ))
      )}
    </Wrap>
  );
};
