import { Console } from '@woowacourse/mission-utils';
import { InputMsg } from '../constants/PlannerMsg.js';

const InputView = {
  async readDate() {
    const userDate = await Console.readLineAsync(InputMsg.inputVisitDay);
    console.log(userDate);
    return userDate;
    // ...
  },
  // ...
};

export default InputView;
