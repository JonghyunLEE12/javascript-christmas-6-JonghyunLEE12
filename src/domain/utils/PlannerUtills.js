// 코드리뷰
import { FOOD_MENU } from '../constants/FoodMenu.js';
import {
  EVENT_CONST,
  DAY_OF_WEEK,
  UTILS_CONST,
} from '../constants/Constants.js';

class PlannerUtils {
  #userOrder;

  #userDate;

  #userDay;

  #userEvent;

  constructor(userOrder, userDate) {
    this.#userOrder = userOrder;
    this.#userDate = userDate;
    this.#userDay = new Date(UTILS_CONST.userDay(this.#userDate)).getDay();
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
      totalAmount.push(MENU_COST[order[0]] * Number(order[1]));
    });
    return totalAmount.reduce((total, cost) => total + cost);
  }

  benefitCheck() {
    if (this.getTotalAmount() >= UTILS_CONST.minGetBenefit) {
      this.#userEvent.christmas = this.#christmasCheck();
      this.#userEvent.weekDay = this.#weekDaysCheck();
      this.#userEvent.weekendDay = this.#weekendDayCheck();
      this.#userEvent.specialDay = this.#specialDayCheck();
      this.#userEvent.benefitEvent = this.#giftCheck();
    }
    return this.#userEvent;
  }

  #christmasCheck() {
    if (this.#userDate > UTILS_CONST.christmasEventEnd) {
      return UTILS_CONST.noBenefit;
    }
    return UTILS_CONST.christmasBenefit(this.#userDate);
  }

  #weekDaysCheck() {
    if (DAY_OF_WEEK.weekDay.includes(this.#userDay)) {
      return (
        this.#checkEventMenu(UTILS_CONST.weekDayEvent) * UTILS_CONST.discount
      );
    }
    return UTILS_CONST.noBenefit;
  }

  #weekendDayCheck() {
    if (DAY_OF_WEEK.weekendDay.includes(this.#userDay)) {
      return (
        this.#checkEventMenu(UTILS_CONST.weekendEvent) * UTILS_CONST.discount
      );
    }
    return UTILS_CONST.noBenefit;
  }

  #specialDayCheck() {
    if (DAY_OF_WEEK.specialDay.includes(this.#userDay)) {
      return UTILS_CONST.specialDiscount;
    }
    if (DAY_OF_WEEK.specialDay.includes(this.#userDate)) {
      return UTILS_CONST.specialDiscount;
    }
    return UTILS_CONST.noBenefit;
  }

  #giftCheck() {
    if (this.getTotalAmount() > UTILS_CONST.minGetGift) {
      return UTILS_CONST.giftCost;
    }
    return UTILS_CONST.noBenefit;
  }

  #checkEventMenu(event) {
    const numberOfMenu = [0];
    const eventMenu = Object.values(FOOD_MENU[event]).map((menu) => menu[0]);
    this.#userOrder.forEach((menu) => {
      if (eventMenu.includes(menu[0])) {
        numberOfMenu.push(Number(menu[1]));
      }
    });
    return numberOfMenu.reduce((total, amount) => total + amount);
  }

  calcBenefitAmount() {
    const totalBenefit = Object.values(this.#userEvent).reduce(
      (total, amount) => total + amount,
    );
    return totalBenefit;
  }

  calcTotalPayment() {
    if (this.#userEvent.benefitEvent !== 0) {
      return (
        this.getTotalAmount() - this.calcBenefitAmount() + UTILS_CONST.giftCost
      );
    }
    return this.getTotalAmount() - this.calcBenefitAmount();
  }
}

export default PlannerUtils;
