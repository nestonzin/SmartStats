import { useState, useEffect } from "react";
import { GameMetadata, Frame as FrameWindow } from "../modules/windowLiveTypes";
import { GameDetails } from "../modules/PersistendDetailsTypes";
import { Frame as FrameDetails } from "../modules/detailLiveTypes";
import BigNumber from "bignumber.js";
import {
  getGameDetails,
  getLiveDetailsGame,
  getLiveWindowGame,
} from "../services/LolApi";

export function LiveGameInfos({ match }: any) {
  const [lastFrameWindow, setLastFrameWindow] = useState<FrameWindow>();
  const [lastFrameDetails, setLastFrameDetails] = useState<FrameDetails>();
  const [gameData, setGameData] = useState<GameDetails>();
  const [metadata, setMetadata] = useState<GameMetadata>();

  const matchId = match.params.gameid;
  const preGameId = new BigNumber(matchId);
  let gameId = BigNumber.sum(preGameId, 1).toString();

  function getISODateMultiplyOf10() {
    const date = new Date();
    date.setMilliseconds(0);

    if (date.getSeconds() % 10 !== 0) {
      date.setSeconds(date.getSeconds() - (date.getSeconds() % 10));
    }
    date.setSeconds(date.getSeconds() - 60);
    return date.toISOString();
  }

  useEffect(() => {
    getLiveGameDetails();

    const windowIntervalID = setInterval(() => {
      getLiveWindow();
      getLiveGameStatus();
    }, 1000);

    return () => {
      clearInterval(windowIntervalID);
    };

    function getLiveWindow() {
      let date = getISODateMultiplyOf10();
      getLiveWindowGame(gameId, date).then((response) => {
        let frames = response.data.frames;
        if (frames === undefined) return;

        setLastFrameWindow(frames[frames.length - 1]);
        setMetadata(response.data.gameMetadata);
      });
    }

    function getLiveGameStatus() {
      let date = getISODateMultiplyOf10();
      getLiveDetailsGame(gameId, date).then((response) => {
        let frames = response.data.frames;
        if (frames === undefined) return;

        setLastFrameDetails(frames[frames.length - 1]);
      });
    }

    function getLiveGameDetails() {
      getGameDetails(matchId).then((response) => {
        let gameData: GameDetails = response.data;
        if (gameData === undefined) return;

        for (const game of gameData.data.event.match.games) {
          if (game.state === "inProgress") {
            gameId = BigNumber.sum(preGameId, game.number).toString();
            console.log(gameId);
          }
        }
        setGameData(gameData);
      });
    }
  }, [matchId]);

  if (
    lastFrameWindow !== undefined &&
    lastFrameDetails !== undefined &&
    metadata !== undefined &&
    gameData !== undefined
  )
    return { lastFrameDetails, lastFrameWindow, gameData, metadata, matchId };
}
