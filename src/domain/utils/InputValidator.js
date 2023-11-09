import { ERROR_MSG } from '../constants/PlannerMsg.js';
import { FOOD_MENU } from '../constants/FoodMenu.js';

class InputValidator {
  #REGAX;

  constructor() {
    this.#REGAX = /\s|[!@#$%^&*(),?":{}|<>]|[a-zA-Z]/;
  }

  async dateValidate(date) {
    this.#regaxCheck(date);
    this.#rangeCheck(date);
    return true;
  }

  #regaxCheck(date) {
    if (this.#REGAX.test(date)) {
      throw new Error(ERROR_MSG.dateError);
    }
  }

  #rangeCheck(date) {
    if (date <= 0 || date > 31) {
      throw new Error(ERROR_MSG.dateError);
    }
  }

  async menuValidate(menu) {
    this.#menuCheck(menu);
  }

  #menuCheck(menu) {
    const canOrder = [];
    const userMenu = [];
    this.#findingMenu(canOrder, userMenu, menu);
    userMenu.forEach((order) => {
      if (!canOrder.includes(order)) {
        throw new Error(ERROR_MSG.notInMenu);
      }
    });
  }

  #findingMenu(canOrder, userMenu, menu) {
    Object.keys(FOOD_MENU).map((course) =>
      this.#makeCanOrder(course, canOrder),
    );

    menu.forEach((order) => userMenu.push(order.split('-')[0]));
  }

  #makeCanOrder(course, canOrder) {
    Object.values(FOOD_MENU[`${course}`]).map((menu) => canOrder.push(menu[0]));
  }
}

export default InputValidator;
