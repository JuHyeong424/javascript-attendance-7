import {Console} from "@woowacourse/mission-utils";
import {DATE} from "../utils/getDate.js";

export async function printAttendanceTime(time) {
  Console.print('');
  Console.print(`${DATE.month.toString().padStart(2,'0')}월 ${DATE.date.toString().padStart(2,'0')}일 ${DATE.dayOfWeek} ${time} (출석)`);
}

export async function printAttendanceHistory(str, COUNT, sum, name) {
  Console.print('');
  Console.print(`이번 달 ${name}의 출석 기록입니다.`);
  Console.print('');
  for (const value of str) {
    Console.print(value);
  }
  Console.print('');
  Console.print(`출석: ${COUNT.출석}회`);
  Console.print(`지각: ${COUNT.지각}회`);
  Console.print(`결석: ${COUNT.결석}회`);
  Console.print('');
  if (sum === 2) {
    Console.print('경고 대상자입니다.');
  }
  if (sum === 3 || sum === 4 || sum === 5) {
    Console.print('면담 대상자입니다.');
  }
  if (sum > 5) {
    Console.print('결석 대상자입니다.');
  }
}