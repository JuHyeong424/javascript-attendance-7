import {getDate} from "./utils/getDate.js";
import {inputChoice} from "./view/inputView.js";
import {checkAttendance} from "./utils/checkAttendance.js";
import {editAttendance} from "./utils/editAttendance.js";
import {checkHistory} from "./utils/checkHistory.js";
import {checkWarning} from "./utils/checkWarning.js";

class App {
  async run() {
    getDate();
    let answer = '';
    while (answer !== 'Q') {
      answer = await inputChoice();
      switch(answer) {
        case '1':
          await checkAttendance();
          break;
        case 2:
          await editAttendance();
          break;
        case 3:
          await checkHistory();
          break;
        case 4:
          await checkWarning();
          break;
      }
    }
  }
}

export default App;
