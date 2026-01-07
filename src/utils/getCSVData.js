import * as fs from "fs";

export function getCSVData() {
  const filePath = 'C:/Users/asdf/Desktop/우테코/javascript-attendance-7/public/attendances.csv';

  const fileReader = fs.readFileSync(filePath, 'utf-8');
  const rows = fileReader.trim().split(/\r?\n/);

  const headers = rows[0].split(',');
  const nicknameIndex  = headers.indexOf('nickname');
  const datetimeIndex = headers.indexOf('datetime');

  const extractedData = [];

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].split(',');
    if (cells.length > Math.max(nicknameIndex, datetimeIndex)) {
      extractedData.push({
        nickname: cells[nicknameIndex],
        datetime: cells[datetimeIndex]
      });
    }
  }

  return extractedData;
}

export function splitDayData(filterArray) {
  const parts = filterArray.map(value => value.datetime.split(' '));
  const dayPart = parts.map(value => value[0].split('-')[2]);
  return [dayPart];
}

export function splitTimeData(filterArray, date) {
  const parts = filterArray.map(value => value.datetime.split(' '));
  const dayPart = parts.map(value => value[0].split('-')[2]);
  const index = dayPart.indexOf(date.toString().padStart(2,'0'));
  const timePart = parts.map(value => value[1])[index];
  const [hour, minute] = timePart.split(':').map(Number);
  return [hour, minute];
}
