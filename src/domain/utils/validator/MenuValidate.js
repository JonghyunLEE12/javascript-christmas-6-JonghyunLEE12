// 코드리뷰
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
    const totalMenuAmount = [];
    this.#menu.forEach((order) => {
      this.#amountCheck(order.split('-')[1], regax);
      totalMenuAmount.push(Number(order.split('-')[1]));
    });

    this.#totalAmountCheck(totalMenuAmount);
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

  #totalAmountCheck(total) {
    const checkTotal = total.reduce((sum, amount) => sum + amount);
    if (checkTotal > 20) {
      throw new Error(ERROR_MSG.totalError);
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
    if (this.#userMenu.length !== new Set(this.#userMenu).size) {
      throw new Error(ERROR_MSG.notInMenu);
    }
  }

  drinkCheck() {
    const menuObject = this.#makingMenuObject();
    if (this.#objectCheck(menuObject)) {
      throw new Error(ERROR_MSG.drinkError);
    }
  }

  #makingMenuObject() {
    const menuObject = {};
    Object.keys(FOOD_MENU).forEach((course) => {
      menuObject[course] = this.#userMenuCourses(course);
    });
    return menuObject;
  }

  #userMenuCourses(course) {
    const includeCourse = [];
    Object.values(FOOD_MENU[course]).forEach((eachMenu) => {
      if (this.#menuIncludes(eachMenu)) {
        includeCourse.push(eachMenu[0]);
      }
    });
    return includeCourse.length;
  }

  #menuIncludes(eachMenu) {
    return this.#userMenu.includes(eachMenu[0]);
  }

  #objectCheck(menuObject) {
    const { appetizer, main, dessert, drink } = menuObject;
    if (appetizer === 0 && main === 0 && dessert === 0 && drink !== 0) {
      return true;
    }
    return false;
  }
}

export default MenuValidate;
