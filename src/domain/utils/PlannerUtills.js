import { FOOD_MENU } from '../constants/FoodMenu.js';
import { EVENT_CONST } from '../constants/Constants.js';

class PlannerUtils {
  #userOrder;

  #userDate;

  constructor(userOrder = [], userDate = 0) {
    this.#userOrder = userOrder;
    this.#userDate = userDate;
  }

  getTotalAmount() {
    const MENU_COST = {};
    Object.values(FOOD_MENU).forEach((course) => {
      Object.values(course).forEach((menu) => {
        MENU_COST[menu[0]] = menu[1];
      });
    });
    return this.#sumAmount(MENU_COST);
  }

  #sumAmount(MENU_COST) {
    const totalAmount = [];
    this.#userOrder.forEach((order) => {
      const [menu, cost] = order.split('-');
      totalAmount.push(MENU_COST[menu] * Number(cost));
    });
    return totalAmount.reduce((total, cost) => total + cost);
  }

  benefitCheck() {
    EVENT_CONST.christmas = this.#christmasCheck();
    return EVENT_CONST;
  }

  #christmasCheck() {
    if (this.#userDate > 25) {
      return 0;
    }
    const benefit = 1000 + (this.#userDate - 1) * 100;
    return benefit;
  }
}

export default PlannerUtils;
