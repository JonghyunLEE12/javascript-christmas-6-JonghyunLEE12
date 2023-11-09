// import { DateValidate } from './validator/dateValidate.js';
// import { MenuValidate } from './validator/MenuValidate.js';
import DateValidate from './validator/DateValidate.js';
import MenuValidate from './validator/MenuValidate.js';

class InputValidator {
  #REGAX;

  constructor() {
    this.#REGAX = /\s|[!@#$%^&*(),?":{}|<>]|[a-zA-Z]/;
  }

  async dateValidate(date) {
    const dateValidator = new DateValidate(this.#REGAX, date);
    dateValidator.regaxCheck();
    dateValidator.rangeCheck();
  }

  async menuValidate(menu) {
    // MenuValidate.menuCheck(menu);
    const menuValidator = new MenuValidate(menu);
    menuValidator.menuCheck(menu);
  }
}

export default InputValidator;
