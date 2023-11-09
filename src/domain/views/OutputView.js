import { Console } from '@woowacourse/mission-utils';
import { STATUS_MSG } from '../constants/PlannerMsg.js';

const OutputView = {
  printWelcome() {
    Console.print(STATUS_MSG.welcomeMsg);
  },

  printMenu() {
    Console.print('<주문 메뉴>');
  },

  printError(message) {
    Console.print(message);
  },
};

export default OutputView;
