import { FOOD_MENU } from '../constants/FoodMenu.js';
import { EVENT_CONST, DAY_OF_WEEK } from '../constants/Constants.js';

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
    EVENT_CONST.weekDay = this.#weekDaysCheck();
    return EVENT_CONST;
  }

  #christmasCheck() {
    if (this.#userDate > 25) {
      return 0;
    }
    const benefit = 1000 + (this.#userDate - 1) * 100;
    return benefit;
  }

  #weekDaysCheck() {
    const DATE = `2023-12-${this.#userDate}`;
    const USER_DAY = new Date(DATE).getDay();
    if (DAY_OF_WEEK.weekDay.includes(USER_DAY)) {
      return this.#checkDessertMenu() * 2023;
    }
    return 0;
  }

  #checkDessertMenu() {
    const numberOfDessert = [0];
    const userMenu = this.#userOrder.map((order) => order.split('-'));
    const dessertMenu = Object.values(FOOD_MENU.dessert).map(
      (dessert) => dessert[0],
    );
    userMenu.forEach((menu) => {
      if (dessertMenu.includes(menu[0])) {
        numberOfDessert.push(Number(menu[1]));
      }
    });
    return numberOfDessert.reduce((total, amount) => total + amount);
  }
}

export default PlannerUtils;
