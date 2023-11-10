import { ERROR_MSG } from '../../constants/PlannerMsg.js';
import { FOOD_MENU } from '../../constants/FoodMenu.js';

class MenuValidate {
  #canOrder;

  #userMenu;

  #menu;

  constructor(menu, canOrder = [], userMenu = []) {
    this.#menu = menu;
    this.#canOrder = canOrder;
    this.#userMenu = userMenu;
  }

  menuCheck() {
    this.#findingMenu(this.#canOrder, this.#userMenu, this.#menu);
    this.#userMenu.forEach((order) => {
      if (!this.#canOrder.includes(order)) {
        throw new Error(ERROR_MSG.notInMenu);
      }
    });
  }

  #findingMenu() {
    Object.keys(FOOD_MENU).map((course) =>
      this.#makeCanOrder(course, this.#canOrder),
    );

    this.#menu.forEach((order) => this.#userMenu.push(order.split('-')[0]));
  }

  #makeCanOrder(course) {
    Object.values(FOOD_MENU[`${course}`]).map((food) =>
      this.#canOrder.push(food[0]),
    );
  }

  menuAmountCheck(regax) {
    this.#menu.forEach((order) =>
      this.#amountCheck(order.split('-')[1], regax),
    );
  }

  #amountCheck(amount, regax) {
    if (regax.test(Number(amount))) {
      throw new Error(ERROR_MSG.notInMenu);
    }
    if (Number(amount) <= 0) {
      throw new Error(ERROR_MSG.notInMenu);
    }

    if (!Number.isSafeInteger(Number(amount))) {
      throw new Error(ERROR_MSG.notInMenu);
    }
  }

  formCheck() {
    const form = /^[가-힣]+-[0-9]+$/;
    this.#menu.forEach((order) => this.#formRegaxCheck(order, form));
  }

  #formRegaxCheck(order, form) {
    if (!form.test(order)) {
      throw new Error(ERROR_MSG.notInMenu);
    }
  }

  duplicateCheck() {
    if (this.#menu.length !== new Set(this.#menu).size) {
      throw new Error(ERROR_MSG.notInMenu);
    }
  }
}

export default MenuValidate;
