import {inputCheckAttendance} from "../view/inputView.js";
import {printAttendanceTime} from "../view/outputView.js";
import {DATE} from "./getDate.js";
import { appendFile } from 'fs';

async function saveAttendanceData(name, time) {
  const filePath = 'C:/Users/asdf/Desktop/우테코/javascript-attendance-7/public/attendances.csv';
  const newRowData = `\n${name},${DATE.year}-${DATE.month.toString().padStart(2,'0')}-${DATE.date.toString().padStart(2,'0')} ${time}`;

  appendFile(filePath, newRowData, 'utf8', (err) => {
    if (err) {
      throw new Error('[ERROR]파일 저장을 실패했습니다. 다시 시도해주세요.');
    }
  });
}

export async function checkAttendance() {
  const [name, time] = await inputCheckAttendance();
  // name,${DATE.year}-${DATE.month}-${DATE.date} time
  await saveAttendanceData(name, time);
  await printAttendanceTime(time);
}
