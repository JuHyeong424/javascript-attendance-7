import {inputEditAttendance} from "../view/inputView.js";

export async function editAttendance() {
  const [name, date, time] = await inputEditAttendance();

}
