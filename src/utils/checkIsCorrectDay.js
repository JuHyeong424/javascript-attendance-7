import {getCSVData, splitDayData, splitTimeData} from "./getCSVData.js";
import {checkCorrectTIme} from "./checkCorrectTIme.js";

function getThisData(name) {
  const extractedData = getCSVData();
  return extractedData.filter(value => value.nickname === name);
}

export function checkIsCorrectDate(date, name) {
  const filterArray = getThisData(name);
  const [dayPart] = splitDayData(filterArray);
  if (!dayPart.some(value => Number(value) === Number(date))) {
    throw new Error('[ERROR] 해당 날짜에 출석 정보가 없습니다. 출석을 해주세요.');
  }
}

export function checkIsCorrectTime(date, time, name) {
  checkCorrectTIme(time)
  const filterArray = getThisData(name);
  const [currentHour, currentMinute] = splitTimeData(filterArray, date);
  const [hour, minute] = time.split(':').map(Number);
  if (currentHour < hour) {
    throw new Error('[ERROR] 아직 수정할 수 없습니다.');
  }
  if (currentHour === hour && currentMinute < minute) {
    throw new Error('[ERROR] 아직 수정할 수 없습니다.');
  }
}
