import { Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex flexDirection="column" minH="100vh" h="100vh" w="100%" >
      <Navbar />
      {children}
    </Flex>
  );
};
