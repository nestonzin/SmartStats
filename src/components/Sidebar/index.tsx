import { Avatar, Box, Flex, Text, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import api from '../../services/api';

interface Match {
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

  useEffect(() => {
    async function getScheduleGames() {
      const response = await api.get('/getSchedule', {
        params: {
          hl: 'pt-BR',
        },
      });
      setSchedules(response.data.data.schedule.events);
    }
    getScheduleGames();
  }, []);

  return (
    <Flex
      bg="brand"
      w={['100%', '100%', '100%', '25%']}
      h="calc(100vh - 5rem)"
      flexDirection="column"
      justifyContent="space-between"
      overflowY="scroll"
    >
      {schedules
        .filter(schedule => schedule.state.includes('unstarted'))
        .map((schedule, index) => (
          <Flex
            key={`${schedule}-${index}`}
            flexDirection="column"
            alignItems="center"
            bg="#D9D9D9"
            p="1rem"
            cursor="pointer"
            border="1px"
          >
            <Text fontWeight="500">{new Date(schedule.startTime).toLocaleString('pt-BR', { calendar: 'long' })}</Text>
            <Text fontWeight="500">{schedule.league.name}</Text>
            <Flex justifyContent="space-between" w="100%" alignItems="center">
              <Box>
                <Avatar size="sm" src={schedule.match.teams[0].image} />
                <Text fontWeight="bold" lineHeight="30px" fontSize="20px">
                  {schedule.match.teams[0].code}
                </Text>
              </Box>
              <Text fontWeight="500">vs</Text>
              <Box>
                <Avatar size="sm" src={schedule.match.teams[1].image} />
                <Text fontWeight="bold" lineHeight="30px" fontSize="20px">
                  {schedule.match.teams[1].code}
                </Text>
              </Box>
            </Flex>
          </Flex>
        ))}
    </Flex>
  );
};
