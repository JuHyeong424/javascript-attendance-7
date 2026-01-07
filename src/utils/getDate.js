import {DateTimes} from "@woowacourse/mission-utils";

/*
{
  year: 2026,
  month: 1,
  date: 7,
  hours: 15,
  minutes: 56,
  dayOfWeek: '수요일'
}
 */
export const DATE = {
  year: 0,
  month: 0,
  date: 0,
  hours: 0,
  minutes: 0,
  dayOfWeek: '',
}

const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

export function getDate() {
  const dateString  = DateTimes.now();
  const dateObject = new Date(dateString);
  DATE['year'] = dateObject.getFullYear();
  DATE['month'] = dateObject.getMonth() + 1;
  DATE['date'] = dateObject.getDate();
  DATE['hours'] = dateObject.getHours();
  DATE['minutes'] = dateObject.getMinutes();
  DATE['dayOfWeek'] = daysOfWeek[dateObject.getDay()];
}
