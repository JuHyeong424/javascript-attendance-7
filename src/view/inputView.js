import {Console} from "@woowacourse/mission-utils";
import {DATE} from "../utils/getDate.js";

const checkInputChoice = ['1', '2', '3', '4', 'Q'];

export async function inputChoice() {
  const answer = await Console.readLineAsync(`
    오늘은 ${DATE.month.toString().padStart(2,'0')}월 ${DATE.date.toString().padStart(2,'0')}일 ${DATE.dayOfWeek}입니다. 기능을 선택하세요.
    1. 출석 확인
    2. 출석 수정
    3. 크루별 출석 기록 확인
    4. 제적 위험자 확인
    Q. 종료\n
  `)

  if (!checkInputChoice.includes(answer)) {
    throw new Error('[ERROR] 잘못된 형식을 입력하였습니다.');
  }
  if ((answer === '1' || answer === '2') && DATE.dayOfWeek === '토요일' || DATE.dayOfWeek === '일요일') {
    throw new Error(`[ERROR] ${DATE.month.toString().padStart(2,'0')}월 ${DATE.date.toString().padStart(2,'0')}일 ${DATE.dayOfWeek}은 등교하는 날이 아닙니다.`);
  }

  return answer;
}

export async function inputCheckAttendance() {
  Console.print('');
  const name = await Console.readLineAsync('닉네임을 입력해 주세요.\n');
  const time = await Console.readLineAsync(`등교 시간을 입력해 주세요.\n`);
  return [name, time];
}