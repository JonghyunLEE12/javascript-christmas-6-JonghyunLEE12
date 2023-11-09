import { Console } from '@woowacourse/mission-utils';
import { INPUT_MSG } from '../constants/PlannerMsg.js';
import InputValidator from '../utils/InputValidator.js';

const InputView = {
  INPUT_VAL: new InputValidator(),

  async readDate() {
    const userDate = await Console.readLineAsync(INPUT_MSG.inputVisitDay);
    await this.INPUT_VAL.dateValidate(Number(userDate));
    return userDate;
  },
};

export default InputView;
