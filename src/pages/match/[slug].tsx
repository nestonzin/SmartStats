import { Box, Flex } from "@chakra-ui/react";
import { DefaultLayout } from "../../_layouts";
import { PlayersTable } from "../../components/PlayersTable";
import { ObjectiveWard } from "../../components/ObjectiveWard";
import { MatchClash } from "../../components/MatchClash/[slug]";

const Match = () => {
  return (
    <DefaultLayout>
      <MatchClash />
      <ObjectiveWard />
      <Flex justifyContent="center">
        <Box bg="white" w="98%" borderRadius="1rem" h=".5rem"></Box>
      </Flex>
      <PlayersTable />
    </DefaultLayout>
  );
};

export default Match;
