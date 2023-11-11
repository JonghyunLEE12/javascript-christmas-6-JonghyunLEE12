import { FOOD_MENU } from '../constants/FoodMenu.js';
import { EVENT_CONST, DAY_OF_WEEK } from '../constants/Constants.js';

class PlannerUtils {
  #userOrder;

  #userDate;

  #userDay;

  #userEvent;

  constructor(userOrder = [], userDate = 0) {
    this.#userOrder = userOrder;
    this.#userDate = userDate;
    this.#userDay = new Date(`2023-12-${this.#userDate}`).getDay();
    this.#userEvent = { ...EVENT_CONST };
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
    if (this.getTotalAmount() >= 10000) {
      this.#userEvent.christmas = this.#christmasCheck();
      this.#userEvent.weekDay = this.#weekDaysCheck();
      this.#userEvent.weekendDay = this.#weekendDayCheck();
      this.#userEvent.specialDay = this.#specialDayCheck();
      this.#userEvent.benefitEvent = this.#benefitCheck();
    }
    return this.#userEvent;
  }

  #christmasCheck() {
    if (this.#userDate > 25) {
      return 0;
    }
    const benefit = 1000 + (this.#userDate - 1) * 100;
    return benefit;
  }

  #weekDaysCheck() {
    if (DAY_OF_WEEK.weekDay.includes(this.#userDay)) {
      return this.#checkEventMenu('dessert') * 2023;
    }
    return 0;
  }

  #weekendDayCheck() {
    if (DAY_OF_WEEK.weekendDay.includes(this.#userDay)) {
      return this.#checkEventMenu('main') * 2023;
    }
    return 0;
  }

  #specialDayCheck() {
    if (DAY_OF_WEEK.specialDay.includes(this.#userDay)) {
      return 1000;
    }
    if (DAY_OF_WEEK.specialDay.includes(Number(this.#userDate))) {
      return 1000;
    }
    return 0;
  }

  #benefitCheck() {
    if (this.getTotalAmount() > 120000) {
      return 25000;
    }
    return 0;
  }

  #checkEventMenu(event) {
    const numberOfMenu = [0];
    const userMenu = this.#userOrder.map((order) => order.split('-'));
    const eventMenu = Object.values(FOOD_MENU[event]).map((menu) => menu[0]);
    userMenu.forEach((menu) => {
      if (eventMenu.includes(menu[0])) {
        numberOfMenu.push(Number(menu[1]));
      }
    });
    return numberOfMenu.reduce((total, amount) => total + amount);
  }
}

export default PlannerUtils;
