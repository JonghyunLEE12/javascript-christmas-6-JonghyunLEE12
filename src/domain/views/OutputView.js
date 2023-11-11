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

  printBenefits(benefit) {
    const userBenefits = Object.entries(benefit).filter(
      (event) => event[1] !== 0,
    );
    if (userBenefits.length === 0) {
      Console.print(OUTPUT_MSG.noBenefit);
      return;
    }
    userBenefits.forEach((event) => {
      Console.print(OUTPUT_MSG.userBenefit(event));
    });
  },

  printTotalBenefit(total) {
    Console.print(OUTPUT_MSG.totalBenefit(total));
  },

  printPayment(payment) {
    Console.print(OUTPUT_MSG.userPayment(payment));
  },

  printEventBadge(amount) {
    Console.print(OUTPUT_MSG.userBadge(amount));
  },
};

export default OutputView;
