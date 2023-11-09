import { ERROR_MSG } from '../../constants/PlannerMsg.js';

class DateValidate {
  #regax;

  #date;

  constructor(regax, date) {
    this.#regax = regax;
    this.#date = date;
  }

  regaxCheck() {
    if (this.#regax.test(this.#date)) {
      throw new Error(ERROR_MSG.dateError);
    }
  }

  rangeCheck() {
    if (this.#date <= 0 || this.#date > 31) {
      throw new Error(ERROR_MSG.dateError);
    }
  }
}

export default DateValidate;
