import { Console } from '@woowacourse/mission-utils';
import { StatusMsg } from '../constants/PlannerMsg.js';

const OutputView = {
  printWelcome() {
    Console.print(StatusMsg.welcomeMsg);
  },

  printMenu() {
    Console.print('<주문 메뉴>');
  },
};

export default OutputView;
