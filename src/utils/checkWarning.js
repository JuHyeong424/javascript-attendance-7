import {getCSVData} from "./getCSVData.js";
import {findHistory, getHistoryPrint} from "./checkHistory.js";
import {printWarining} from "../view/outputView.js";

const RESULT = [];

export async function checkWarning() {
  const extractedData = getCSVData().sort();
  const groupedDatetimes = extractedData.reduce((acc, cur) => {
    const nickname = cur.nickname;
    const datetime = cur.datetime;

    if (!acc[nickname]) {
      acc[nickname] = [];
    }

    acc[nickname].push(datetime);

    return acc;
  }, {});

  const keys = Object.keys(groupedDatetimes);
  for (let i = 1; i < keys.length; i++) {
    console.log(keys[i]);
    const HISTORY = findHistory(keys[i]);
    const str = await getHistoryPrint(HISTORY);
    const COUNT = { 출석: 0, 지각: 0, 결석: 0, 대상자: '' };
    for (const value of str) {
      if (value.includes('출석')) COUNT['출석'] += 1;
      if (value.includes('지각')) COUNT['지각'] += 1;
      if (value.includes('결석')) COUNT['결석'] += 1;
    }
    const sum = COUNT['결석'] + COUNT['지각'] / 3;
    RESULT.push({ 이름: keys[i], 출석: COUNT['출석'], 지각: COUNT['지각'], 결석: COUNT['결석'], 대상자: sum });
  }

  await printWarining(RESULT);
}