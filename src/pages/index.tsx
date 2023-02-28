import { Flex } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { LastMatches } from "../components/LastMatches";
import { ScheduleCard } from "../components/ScheduleCard";
import { Sidebar } from "../components/Sidebar";
import { DefaultLayout } from "../_layouts";

export default function Home() {
  return (
    <DefaultLayout>
      {/* <Sidebar /> */}
      {/* <Flex
          flexDirection="column"
          w={["80%"]}
          justifyContent={["space-between"]}
        >
          <Carousel />
          <LastMatches />
        </Flex> */}
      <ScheduleCard />
    </DefaultLayout>
  );
}
