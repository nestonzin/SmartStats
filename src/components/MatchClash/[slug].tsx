import { Flex, Avatar, Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useRouter } from "next/router";

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

export const MatchClash = () => {
  const { query } = useRouter();
  console.log(query.slug);

  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    async function getScheduleGames() {
      const response = await api.get("/getSchedule", {
        params: {
          hl: "pt-BR",
        },
      });
      setSchedules(response.data.data.schedule.events.slice(0, 1));
    }
    getScheduleGames();
  }, []);
  return (
    <Flex h="25vh" alignItems="center" justifyContent="space-around">
      {schedules.map((schedule, index) => (
        <Flex
          key={`${schedule}-${index}`}
          bg="#B3B0B8"
          w="100%"
          h="100%"
          justifyContent={["space-around"]}
          alignItems="center"
        >
          <Avatar size={"xl"} src={schedule.match.teams[0].image} />
          <Box textAlign="center">
            <Text>VS</Text>
            <Text>ao vivo</Text>
          </Box>
          <Avatar size={"xl"} src={schedule.match.teams[1].image} />
        </Flex>
      ))}
    </Flex>
  );
};
