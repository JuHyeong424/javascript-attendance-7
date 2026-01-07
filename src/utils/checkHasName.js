import {getCSVData} from "./getCSVData.js";

export function checkHasName(name) {
  const extractedData = getCSVData();

  if (!extractedData.some(value => value.nickname === name)) {
    throw new Error(('[ERROR] 등록되지 않은 닉네임입니다.'));
  }
}
