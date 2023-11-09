import { ERROR_MSG } from '../constants/PlannerMsg.js';

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
    console.log(menu);
  }
}

export default InputValidator;
