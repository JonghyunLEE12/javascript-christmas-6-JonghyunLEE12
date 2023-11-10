import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../constants/PlannerMsg.js';

const OutputView = {
  printStatusMsg(status) {
    Console.print(status);
  },

  printError(message) {
    Console.print(message);
  },

  printOrderMenu(userOrder) {
    const orderList = userOrder.map((order) => order.split('-'));
    orderList.forEach((order) => {
      Console.print(OUTPUT_MSG.userOrder(order));
    });
  },

  printTotalAmount(totalAmount) {
    Console.print(OUTPUT_MSG.totalAmount(totalAmount));
  },

  printGift(amount) {
    Console.print(OUTPUT_MSG.giftMenu(amount));
  },
};

export default OutputView;
