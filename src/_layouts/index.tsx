import { Flex } from "@chakra-ui/react";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Flex flexDirection="column" minH="100vh" w="100%">
      {children}
    </Flex>
  );
};
