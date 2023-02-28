import { useEffect, useState } from "react";
import { getLiveGames, getSchedule } from "../services/LolApi";

import { Event as LiveEvents } from "../modules/scheduleTypes";
import { Event as TodayEvents } from "../modules/liveGameTypes";

export function GetScheduleGames() {
  const [liveEvents, setLiveEvents] = useState<LiveEvents[]>([]);
  const [todayEvents, setTodayEvents] = useState<TodayEvents[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    getLiveGames()
      .then((response) => {
        setLiveEvents(response.data.data.schedule.events.filter(filterByTeams));
        setIsLoading(false);
      })
      .catch((error) => console.error(error));

    getSchedule()
      .then((response) => {
        setTodayEvents(
          response.data.data.schedule.events.filter(filterByTodayDate)
        );
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return { liveEvents, todayEvents, isLoading };
}

function filterByTeams(event: LiveEvents) {
  return event.match !== undefined;
}
let date = new Date(Date.now());

function filterByTodayDate(event: TodayEvents) {
  let eventDate = event.startTime.toString().split("T")[0].split("-");

  if (
    parseInt(eventDate[0]) === date.getFullYear() &&
    parseInt(eventDate[1]) === date.getUTCMonth() + 1 &&
    parseInt(eventDate[2]) === date.getDate()
  ) {
    if (event.match === undefined) return false;
    if (event.match.id === undefined) return false;

    return true;
  } else {
    return false;
  }
}
