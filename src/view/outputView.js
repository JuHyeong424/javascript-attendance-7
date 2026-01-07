import {Console} from "@woowacourse/mission-utils";
import {DATE} from "../utils/getDate.js";

export async function printAttendanceTime(time) {
  Console.print('');
  Console.print(`${DATE.month.toString().padStart(2,'0')}월 ${DATE.date.toString().padStart(2,'0')}일 ${DATE.dayOfWeek} ${time} (출석)`);
}
