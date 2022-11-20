import { Box, Flex } from "@chakra-ui/react";
import { DefaultLayout } from "../../_layouts";
import { feedlolApi } from "../../services/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TableStats } from "../../components/TableStats";
import { TeamStatus } from "../../components/TeamStatus";
import { MatchClash } from "../../components/MatchClash/[slug]";

interface Match {
  id: number;
  teams: {
    name: string;
    code: string;
    image: string;
  }[];
}

const Match = () => {
  const { query } = useRouter();
  console.log(query.slug);
  const [stats, setStats] = useState();

  // useEffect(() => {
  //   async function getStats() {
  //     const response = await feedlolApi.get(`/window/${query.slug}`);
  //     console.log("peguei os stats", stats);
  //     setStats(response.data);
  //   }
  //   getStats();
  // }, [query.slug, stats]);

  return (
    <DefaultLayout>
      <MatchClash />
      <TeamStatus />
      <Flex justifyContent="center">
        <Box bg="brand" w="98%" borderRadius="1rem" h=".5rem"></Box>
      </Flex>
      <TableStats />
    </DefaultLayout>
  );
};

export default Match;
