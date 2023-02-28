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
import {
  Frame as FrameWindow,
  Participant as ParticipantWindow,
} from "../../modules/windowLiveTypes";
import { GameDetails } from "../../modules/PersistendDetailsTypes";
import { GameMetadata } from "../../modules/windowLiveTypes";
import { Frame as FrameDetails } from "../../modules/detailLiveTypes";
import { CHAMPIONS_URL } from "../../services/LolApi";
import { useState } from "react";

type Props = {
  lastFrameWindow: FrameWindow;
  lastFrameDetails: FrameDetails;
  gameMetadata: GameMetadata;
  gameDetails: GameDetails;
};

export const PlayersTable = ({
  lastFrameDetails,
  lastFrameWindow,
  gameMetadata,
  gameDetails,
}: Props) => {
  let blueTeam = gameDetails?.data.event.match.teams[0];
  let redTeam = gameDetails?.data.event.match.teams[1];
  const auxBlueTeam = blueTeam;
  /*
        As vezes os times continuam errados mesmo apos verificar o ultimo frame,
        em ligas como TCL, por isso fazemos essa verificação pelo nome
    */
  const summonerName =
    gameMetadata?.blueTeamMetadata.participantMetadata[0].summonerName.split(
      " "
    );
  if (redTeam?.code.startsWith(summonerName[0])) {
    // Temos que verificar apenas os primeiros caracteres pois os times academy usam o A, a mais na tag mas não nos nomes
    blueTeam = redTeam;
    redTeam = auxBlueTeam;
  }

  return (
    <TableContainer>
      <VStack spacing="1rem" align="center">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>{blueTeam.code}</Th>
              <Th>Vida</Th>
              <Th>Itens</Th>
              <Th>CS</Th>
              <Th>KDA</Th>
              <Th>Ouro</Th>
              <Th>+/-</Th>
            </Tr>
          </Thead>
          <Tbody>
            {lastFrameWindow.blueTeam.participants.map(
              (player: ParticipantWindow) => (
                //precisa passar uma chave certa !!!
                <Tr key={`${player}-${player}`}>
                  <Td maxW={["10rem"]} minW={["10rem"]}>
                    <Flex
                      alignItems="center"
                      gap=".5rem"
                      maxW={["10rem"]}
                      w="100%"
                    >
                      <Avatar
                        size={"sm"}
                        src={`https://ddragon.bangingheads.net/cdn/11.1.1/img/champion/${
                          gameMetadata.blueTeamMetadata.participantMetadata[
                            player.participantId - 1
                          ].championId
                        }.png`}
                      />
                      <Box>
                        <Text fontWeight={900}>
                          {
                            gameMetadata.blueTeamMetadata.participantMetadata[
                              player.participantId - 1
                            ].championId
                          }
                        </Text>
                        <Text>
                          {
                            gameMetadata.blueTeamMetadata.participantMetadata[
                              player.participantId - 1
                            ].summonerName
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
                      {/* {participant.maxHealth} */}
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
                    <Box textAlign="left">{player.creepScore}</Box>
                  </Td>
                  <Td isNumeric>
                    <Flex textAlign="left">
                      <Text>{player.kills}/</Text>
                      <Text>{player.deaths}/</Text>
                      <Text>{player.assists}</Text>
                    </Flex>
                  </Td>
                  <Td isNumeric>
                    <Box textAlign="left">{player.totalGold}</Box>
                  </Td>
                  <Td isNumeric>
                    <Box textAlign="left">{player.totalGold}</Box>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>{redTeam.code}</Th>
              <Th>Vida</Th>
              <Th>Itens</Th>
              <Th>CS</Th>
              <Th>KDA</Th>
              <Th>Ouro</Th>
              <Th>+/-</Th>
            </Tr>
          </Thead>
          <Tbody>
            {lastFrameWindow.redTeam.participants.map(
              (player: ParticipantWindow) => (
                <Tr key={`${player}-${player}`}>
                  <Td maxW={["10rem"]} minW={["10rem"]}>
                    <Flex
                      alignItems="center"
                      gap=".5rem"
                      maxW={["10rem"]}
                      w="100%"
                    >
                      <Avatar
                        size={"sm"}
                        src={`https://ddragon.bangingheads.net/cdn/11.1.1/img/champion/${
                          gameMetadata.redTeamMetadata.participantMetadata[
                            player.participantId - 1
                          ].championId
                        }.png`}
                      />
                      <Box>
                        <Text fontWeight={900}>
                          {
                            gameMetadata.redTeamMetadata.participantMetadata[
                              player.participantId - 1
                            ].championId
                          }
                        </Text>
                        <Text>
                          {
                            gameMetadata.redTeamMetadata.participantMetadata[
                              player.participantId - 1
                            ].summonerName
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
                      {/* {participant.maxHealth} */}
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
                    <Box textAlign="left">{player.creepScore}</Box>
                  </Td>
                  <Td isNumeric>
                    <Flex textAlign="left">
                      <Text>{player.kills}/</Text>
                      <Text>{player.deaths}/</Text>
                      <Text>{player.assists}</Text>
                    </Flex>
                  </Td>
                  <Td isNumeric>
                    <Box textAlign="left">{player.totalGold}</Box>
                  </Td>
                  <Td isNumeric>
                    <Box textAlign="left">{player.totalGold}</Box>
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
