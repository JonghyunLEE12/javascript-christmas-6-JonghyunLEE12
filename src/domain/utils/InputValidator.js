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
    dateValidator.safeCheck();
    dateValidator.rangeCheck();
  }

  async menuValidate(menu) {
    const menuValidator = new MenuValidate(menu);
    menuValidator.menuCheck();
    menuValidator.menuAmountCheck(this.#REGAX);
    menuValidator.formCheck();
  }
}

export default InputValidator;
