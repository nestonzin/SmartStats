import matchmock from "../../mocks/match.json";
import {
  Box,
  Flex,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Avatar,
  VStack,
} from "@chakra-ui/react";

export interface Root {
  esportsGameId: string;
  esportsMatchId: string;
  gameMetadata: GameMetadata;
  frames: Frame[];
}

export interface GameMetadata {
  patchVersion: string;
  blueTeamMetadata: BlueTeamMetadata;
  redTeamMetadata: RedTeamMetadata;
}

export interface BlueTeamMetadata {
  esportsTeamId: string;
  participantMetadata: ParticipantMetadaum[];
}

export interface ParticipantMetadaum {
  participantId: number;
  summonerName: string;
  championId: string;
  role: string;
}

export interface RedTeamMetadata {
  esportsTeamId: string;
  participantMetadata: ParticipantMetadaum2[];
}

export interface ParticipantMetadaum2 {
  participantId: number;
  summonerName: string;
  championId: string;
  role: string;
}

export interface Frame {
  rfc460Timestamp: string;
  gameState: string;
  blueTeam: BlueTeam;
  redTeam: RedTeam;
}

export interface BlueTeam {
  totalGold: number;
  inhibitors: number;
  towers: number;
  barons: number;
  totalKills: number;
  dragons: string[];
  participants: Participant[];
}

export interface Participant {
  participantId: number;
  level: number;
  kills: number;
  deaths: number;
  assists: number;
  creepScore: number;
  totalGold: number;
  currentHealth: number;
  maxHealth: number;
}

export interface RedTeam {
  totalGold: number;
  inhibitors: number;
  towers: number;
  barons: number;
  totalKills: number;
  dragons: string[];
  participants: Participant2[];
}

export interface Participant2 {
  participantId: number;
  level?: number;
  kills?: number;
  deaths?: number;
  assists?: number;
  creepScore?: number;
  totalGold?: number;
  currentHealth?: number;
  maxHealth?: number;
  summonerName?: string;
  championId?: string;
  role?: string;
}

export const TableStats = () => {
  const matchStats: Root = matchmock;

  return (
    <TableContainer>
      <VStack spacing="1rem" align="center">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>PAIN</Th>
              <Th>Vida</Th>
              <Th>Itens</Th>
              <Th>CS</Th>
              <Th>KDA</Th>
              <Th>Ouro</Th>
              <Th>+/-</Th>
            </Tr>
          </Thead>
          <Tbody>
            {matchStats.frames[0].blueTeam.participants.map(
              (participant, index) => (
                <Tr key={`${participant}-${index}`}>
                  <Td maxW={["10rem"]} minW={["10rem"]}>
                    <Flex
                      alignItems="center"
                      gap=".5rem"
                      maxW={["10rem"]}
                      w="100%"
                    >
                      <Avatar
                        size={"sm"}
                        src={`https://ddragon.bangingheads.net/cdn/11.1.1/img/champion/${matchStats.gameMetadata.blueTeamMetadata.participantMetadata[index].championId}.png`}
                      />
                      <Box>
                        <Text fontWeight={900}>
                          {
                            matchStats.gameMetadata.blueTeamMetadata
                              .participantMetadata[index].championId
                          }
                        </Text>
                        <Text>
                          {
                            matchStats.gameMetadata.blueTeamMetadata
                              .participantMetadata[index].summonerName
                          }
                        </Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>
                    <Box
                      bg="green"
                      w="5rem"
                      textAlign="center"
                      color="white"
                      fontWeight="700"
                    >
                      {participant.maxHealth}
                    </Box>
                  </Td>
                  <Td>
                    <Flex
                      w="12rem"
                      bg="brand"
                      h="2rem"
                      gap=".5rem"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box w={["1.5rem"]} h={["1.5rem"]} bg="white"></Box>
                      <Box w={["1.5rem"]} h={["1.5rem"]} bg="white"></Box>
                      <Box w={["1.5rem"]} h={["1.5rem"]} bg="white"></Box>
                      <Box w={["1.5rem"]} h={["1.5rem"]} bg="white"></Box>
                      <Box w={["1.5rem"]} h={["1.5rem"]} bg="white"></Box>
                      <Box w={["1.5rem"]} h={["1.5rem"]} bg="white"></Box>
                    </Flex>
                  </Td>
                  <Td isNumeric>
                    <Box textAlign="left">{participant.creepScore}</Box>
                  </Td>
                  <Td isNumeric>
                    <Flex textAlign="left">
                      <Text>{participant.kills}/</Text>
                      <Text>{participant.deaths}/</Text>
                      <Text>{participant.assists}</Text>
                    </Flex>
                  </Td>
                  <Td isNumeric>
                    <Box textAlign="left">{participant.totalGold}</Box>
                  </Td>
                  <Td isNumeric>
                    <Box textAlign="left">{participant.totalGold}</Box>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>PAIN</Th>
              <Th>Vida</Th>
              <Th>Itens</Th>
              <Th>CS</Th>
              <Th>KDA</Th>
              <Th>Ouro</Th>
              <Th>+/-</Th>
            </Tr>
          </Thead>
          <Tbody>
            {matchStats.frames[0].redTeam.participants.map(
              (participant, index) => (
                <Tr key={`${participant}-${index}`}>
                  <Td maxW={["10rem"]} minW={["10rem"]}>
                    <Flex
                      alignItems="center"
                      gap=".5rem"
                      maxW={["10rem"]}
                      w="100%"
                    >
                      <Avatar
                        size={"sm"}
                        src={`https://ddragon.bangingheads.net/cdn/11.1.1/img/champion/${matchStats.gameMetadata.redTeamMetadata.participantMetadata[index].championId}.png`}
                      />
                      <Box>
                        <Text fontWeight={900}>
                          {
                            matchStats.gameMetadata.redTeamMetadata
                              .participantMetadata[index].championId
                          }
                        </Text>
                        <Text>
                          {
                            matchStats.gameMetadata.redTeamMetadata
                              .participantMetadata[index].summonerName
                          }
                        </Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>
                    <Box
                      bg="green"
                      w="5rem"
                      textAlign="center"
                      color="white"
                      fontWeight="700"
                    >
                      {participant.maxHealth}
                    </Box>
                  </Td>
                  <Td>
                    <Flex
                      w="12rem"
                      bg="brand"
                      h="2rem"
                      gap=".5rem"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box w={["1.5rem"]} h={["1.5rem"]} bg="white"></Box>
                      <Box w={["1.5rem"]} h={["1.5rem"]} bg="white"></Box>
                      <Box w={["1.5rem"]} h={["1.5rem"]} bg="white"></Box>
                      <Box w={["1.5rem"]} h={["1.5rem"]} bg="white"></Box>
                      <Box w={["1.5rem"]} h={["1.5rem"]} bg="white"></Box>
                      <Box w={["1.5rem"]} h={["1.5rem"]} bg="white"></Box>
                    </Flex>
                  </Td>
                  <Td isNumeric>
                    <Box textAlign="left">{participant.creepScore}</Box>
                  </Td>
                  <Td isNumeric>
                    <Flex textAlign="left">
                      <Text>{participant.kills}/</Text>
                      <Text>{participant.deaths}/</Text>
                      <Text>{participant.assists}</Text>
                    </Flex>
                  </Td>
                  <Td isNumeric>
                    <Box textAlign="left">{participant.totalGold}</Box>
                  </Td>
                  <Td isNumeric>
                    <Box textAlign="left">{participant.totalGold}</Box>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </VStack>
    </TableContainer>
  );
};
