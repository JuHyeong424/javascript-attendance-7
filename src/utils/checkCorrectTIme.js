export function checkCorrectTIme(time) {
  const [hour, minute] = time.split(':');

  if (Number(hour) > 24 || Number(hour) < 0) {
    throw new Error('[ERROR] 잘못된 형식을 입력하였습니다.');
  }

  if (Number(minute) < 0 || Number(minute) > 59) {
    throw new Error('[ERROR] 잘못된 형식을 입력하였습니다.');
  }
}