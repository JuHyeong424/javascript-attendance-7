import {inputEditAttendance} from "../view/inputView.js";
import {getCSVData} from "./getCSVData.js";
import {getThisData} from "./checkIsCorrectDay.js";
import {getDayName} from "./checkHistory.js";
import {printEdit} from "../view/outputView.js";
import * as fs from "fs";

/*
name: 빙티
date: 2
time: 9:55
extractedData: [
  { nickname: 'nickname', datetime: 'datetime' },
  { nickname: '빙봉', datetime: '2026-01-06 10:08' },
  { nickname: '이든', datetime: '2026-01-06 10:07' },
  { nickname: '빙티', datetime: '2026-01-06 10:01' },
  { nickname: '짱수', datetime: '2026-01-06 10:00' },
  { nickname: '쿠키', datetime: '2026-01-05 10:07' },
  { nickname: '빙봉', datetime: '2026-01-05 10:06' },
  { nickname: '빙티', datetime: '2026-01-05 10:06' },
  { nickname: '짱수', datetime: '2026-01-05 10:00' },
  { nickname: '빙봉', datetime: '2026-01-02 13:06' },
  { nickname: '이든', datetime: '2026-01-02 13:02' },
  { nickname: '쿠키', datetime: '2026-01-02 13:01' },
  { nickname: '빙티', datetime: '2026-01-02 13:00' },
  { nickname: '짱수', datetime: '2026-01-02 13:00' }
]
 */
export async function editAttendance() {
  const [name, date, time] = await inputEditAttendance();
  const extractedData = getCSVData();
  let thisData = '';
  const updatedData = extractedData.map(value => {
    if (value.nickname === name && value.datetime.split(' ')[0].split('-')[2] === date.toString().padStart(2, '0')) {
      thisData = value.datetime.split(' ')[1];
      return { ...value, datetime: `2026-01-${date.toString().padStart(2, '0')} ${time}`};
    }
    return value;
  });
  const thisDayName = getDayName(`2026-01-${date.toString().padStart(2, '0')}`);
  const [thisHours, thisMinute] = thisData.split(':');
  const [hour, minute] = time.split(':');
  let thisAttendance;
  let attendance;
  if (thisDayName === '월요일') {
    if (Number(thisHours) === 13 && (Number(thisMinute) > 5 && Number(thisMinute) < 31)) {
      thisAttendance = '(지각)';
    } else if ((Number(thisHours) === 13 && Number(thisMinute) > 30) || Number(thisHours) > 13) {
      thisAttendance = '(결석)';
    } else {
      thisAttendance = '(출석)';
    }

    if (Number(hour) === 13 && (Number(minute) > 5 && Number(minute) < 31)) {
      attendance = '(지각)';
    } else if ((Number(hour) === 13 && Number(minute) > 30) || Number(hour) > 13) {
      attendance = '(결석)';
    } else {
      attendance = '(출석)';
    }
  } else {
    if (Number(thisHours) === 10 && (Number(thisMinute) > 5 && Number(thisMinute) < 31)) {
      thisAttendance = '(지각)';
    } else if ((Number(thisHours) === 10 && (Number(thisMinute) > 30) || Number(thisHours) > 10)) {
      thisAttendance = '(결석)';
    } else {
      thisAttendance = '(출석)';
    }

    if (Number(hour) === 10 && (Number(minute) > 5 && Number(minute) < 31)) {
      attendance = '(지각)';
    } else if ((Number(hour) === 10 && Number(minute) > 30) || Number(hour) > 10) {
      attendance = '(결석)';
    } else {
      attendance = '(출석)';
    }
  }
  writeCSVData(updatedData);
  await printEdit(thisAttendance, thisData, thisDayName, date, time, attendance);
}

function writeCSVData(data) {
  const filePath = 'C:/Users/asdf/Desktop/우테코/javascript-attendance-7/public/attendances.csv';
  const header = 'nickname,datetime';

  const body = data
    .filter(row => row.nickname !== 'nickname')
    .map(row => `${row.nickname},${row.datetime}`);

  const csv = [header, ...body].join('\n');
  fs.writeFileSync(filePath, csv, 'utf-8');
}
