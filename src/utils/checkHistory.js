import {inputCheckHistory} from "../view/inputView.js";
import {getThisData} from "./checkIsCorrectDay.js";
import {DATE} from "./getDate.js";
import {printAttendanceHistory} from "../view/outputView.js";

/*
[
  { date: '2026-01-02', day: '금요일', time: '13:06', attendance: '결석' },
  { date: '2026-01-05', day: '월요일', time: '10:06', attendance: '출석' },
  { date: '2026-01-06', day: '화요일', time: '10:08', attendance: '지각' }
]
 */
const HISTORY = [];

function getDayName(dateString) {
  const daysOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}

function checkAttendance(date) {
  const [hour, minute] = date[1].split(':');
  if (date[2] === '월요일') {
    if (Number(hour) === 13 && Number(minute) > 5 && Number(minute) <= 30) {
      return "지각";
    }
    if (Number(hour) === 13 && Number(minute) > 30 ) {
      return "결석";
    }
    if (Number(hour) > 13) {
      return "결석";
    }
    return "출석";
  }
  if (Number(hour) === 10 && Number(minute) > 5 && Number(minute) <= 30) {
    return "지각";
  }
  if (Number(hour) === 10 && Number(minute) > 30 ) {
    return "결석";
  }
  if (Number(hour) > 10) {
    return "결석";
  }
  return "출석";
}

function findHistory(name) {
  const dataArray = getThisData(name);
  const date = dataArray.map(value => value.datetime.split(' '));
  for (let i = 0; i < date.length; i++) {
    date[i].push(getDayName(date[i][0]));
  }
  for (let i = 0; i < date.length; i++) {
    date[i].push(checkAttendance(date[i]));
  }

  for (let i = date.length - 1; i >= 0; i--) {
    HISTORY.push({
      date : date[i][0],
      day : date[i][2],
      time : date[i][1],
      attendance : date[i][3],
    })
  }
}

function getHistoryPrint() {
  let str = [];
  for (let i = 1; i < DATE.date; i++) {
    const day = getDayName(`2026-01-${i.toString().padStart(2,'0')}`);
    let has = false;
    if (day !== '토요일' && day !== '일요일') {
      for (let j = 0; j < HISTORY.length; j++) {
        if (Number(HISTORY[j].date.split('-')[2]) === i) {
          str.push(`${HISTORY[j].date.split('-')[1]}월 ${HISTORY[j].date.split('-')[2]}일 ${HISTORY[j].day} ${HISTORY[j].time} (${HISTORY[j].attendance})`);
          has = true;
          break;
        }
      }
      if (!has) {
        str.push(`01월 ${i.toString().padStart(2, '0')}일 ${day} --:-- (결석)`);
      }
    }
  }
  return str;
}

const COUNT = { 출석: 0, 지각: 0, 결석: 0, 대상자: '' };

export async function checkHistory() {
  const name = await inputCheckHistory();
  findHistory(name);
  const str = getHistoryPrint();
  for (const value of str) {
    if (value.includes('출석')) COUNT['출석'] += 1;
    if (value.includes('지각')) COUNT['지각'] += 1;
    if (value.includes('결석')) COUNT['결석'] += 1;
  }
  const sum = COUNT['결석'] + COUNT['지각'] / 3;
  await printAttendanceHistory(str, COUNT, sum, name);
}