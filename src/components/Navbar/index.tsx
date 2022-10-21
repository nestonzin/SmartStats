import { Flex, Text, Link } from "@chakra-ui/react";
import { House } from "phosphor-react";

export const Navbar = () => {
  return (
    <Flex
      bg="#111111"
      gap={["1rem"]}
      justifyContent="space-between"
      alignItems="center"
      p="1rem"
      h="5rem"
    >
      <Text fontWeight="bold" color="white">
        SmartStats
      </Text>
      <Flex gap="2rem">
        <Link
          color="white"
          _hover={{
            bg: "rgba(128,128,128,.3)",
            padding: "7.5px 16px",
            borderRadius: "6.5px",
            textAlign: "center",
          }}
        >
          Jogos
        </Link>
        <Link
          color="white"
          _hover={{
            bg: "rgba(128,128,128,.3)",
            padding: "7.5px 16px",
            borderRadius: "6.5px",
            textAlign: "center",
          }}
        >
          Colaboradores
        </Link>
      </Flex>
      <Link color="white">
        <House size={25} weight={"thin"} alt={"Botão de voltar pra home"} />
      </Link>
    </Flex>
  );
};
