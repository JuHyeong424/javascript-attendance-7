import {getCSVData, splitDayData} from "./getCSVData.js";
import {DATE} from "./getDate.js";

export function checkHasName(name) {
  const extractedData = getCSVData();

  if (!extractedData.some(value => value.nickname === name)) {
    throw new Error('[ERROR] 등록되지 않은 닉네임입니다.');
  }
}

export function checkDuplicationName(name) {
  const extractedData = getCSVData();

  const filterData = extractedData.filter(value => value.nickname === name);
  const dayPart = splitDayData(filterData);
  if (dayPart.some(value => value.some(item => Number(item) === DATE.date))) {
    throw new Error('[ERROR] 이미 출석을 확인하였습니다. 필요한 경우 수정 기능을 이용해 주세요.');
  }
}
