import { Flex } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { Sidebar } from "../components/Sidebar";
import { DefaultLayout } from "../_layouts";

export default function Home() {
  return (
    <DefaultLayout>
      <Flex>
        <Sidebar />

        <Carousel />
      </Flex>
    </DefaultLayout>
  );
}
