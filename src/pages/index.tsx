import { Box, Flex } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { LastMatches } from "../components/LastMatches";
import { Sidebar } from "../components/Sidebar";
import { DefaultLayout } from "../_layouts";

export default function Home() {
  return (
    <DefaultLayout>
      <Flex alignItems={["center"]} h="90vh" overflow={["auto", "hidden"]}>
        <Sidebar />
        <Flex flexDirection="column" w={["80%"]}>
          <Carousel />
          <LastMatches />
        </Flex>
      </Flex>
    </DefaultLayout>
  );
}
