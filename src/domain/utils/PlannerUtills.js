import { FOOD_MENU } from '../constants/FoodMenu.js';

class PlannerUtils {
  #userOrder;

  constructor(userOrder) {
    this.#userOrder = userOrder;
  }

  getTotalAmount() {
    const amountSum = [];
    const orderList = this.#userOrder.map((order) => order.split('-'));
    this.#sumAmount(amountSum, orderList);
    return amountSum.reduce((total, each) => total + each);
  }

  #sumAmount(amountSum, orderList) {
    orderList.forEach((order) => {
      this.#orderCheck(amountSum, order);
    });
  }

  #orderCheck(amountSum, order) {
    Object.values(FOOD_MENU).forEach((course) => {
      this.#eachCheck(amountSum, order, course);
    });
  }

  #eachCheck(amountSum, order, course) {
    Object.values(course).forEach((menu) => {
      if (order[0] === menu[0]) {
        amountSum.push(menu[1] * Number(order[1]));
      }
    });
  }
}

export default PlannerUtils;
