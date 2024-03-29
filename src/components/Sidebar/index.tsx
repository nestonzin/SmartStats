import { Avatar, Box, Flex, Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import NextLink from "next/link";

interface Match {
  id: string;
  teams: {
    name: string;
    code: string;
    image: string;
  }[];
}

interface Schedule {
  startTime: Date;
  state: string;
  league: {
    name: string;
  };
  match: Match;
}

export const Sidebar = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const removeTbdAndTftFromSchedule = (jogos: Schedule) => {
    return jogos.match.teams[0].code !== 'TBD' && jogos.match.teams[0].code !== 'TFT';
  };

  useEffect(() => {
    setIsLoading(true);
    async function getScheduleGames() {
      const response = await api.get('/getSchedule', {
        params: {
          hl: 'pt-BR',
        },
      });
      setSchedules(response.data.data.schedule.events);
      setIsLoading(false);
    }
    getScheduleGames();
  }, []);

  return (
    <Flex
      bg="brand"
      w={['100%', '100%', '100%', '25%']}
      h="100vh"
      flexDirection="column"
      justifyContent="flex-start"
      overflowY="scroll"
    >
      {isLoading ? (
        <Spinner color="white" alignSelf="center" />
      ) : (
        schedules
          .filter(schedule => schedule.state.includes('unstarted'))
          .map((schedule, index) => (
            <NextLink
              href={`/match/${schedule.match.id}`}
              key={`${schedule}-${index}`}
            >
              <Flex
                key={`${schedule}-${index}`}
                flexDirection="column"
                alignItems="center"
                bg="#D9D9D9"
                cursor="pointer"
                border="1px"
              >
                {schedule.match.teams[0].code !== "TBD" && (
                  <>
                    <Text fontWeight="500">
                      {new Date(schedule.startTime).toLocaleString("pt-BR", {
                        calendar: "long",
                      })}
                    </Text>
                    <Text fontWeight="500">{schedule.league.name}</Text>
                    <Flex
                      justifyContent="space-between"
                      w="100%"
                      alignItems="center"
                    >
                      <Box>
                        <Avatar size="sm" src={schedule.match.teams[0].image} />
                        <Text
                          fontWeight="bold"
                          lineHeight="30px"
                          fontSize="20px"
                        >
                          {schedule.match.teams[0].code}
                        </Text>
                      </Box>
                      <Text fontWeight="500">vs</Text>
                      <Box>
                        <Avatar size="sm" src={schedule.match.teams[1].image} />
                        <Text
                          fontWeight="bold"
                          lineHeight="30px"
                          fontSize="20px"
                        >
                          {schedule.match.teams[1].code}
                        </Text>
                      </Box>
                    </Flex>
                  </>
                )}
              </Flex>
            </NextLink>
          ))
      )}
    </Flex>
  );
};
