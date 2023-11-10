class PlannerData {
  #date;

  #userOrder;

  constructor(date = 0, userOrder = []) {
    this.#date = date;
    this.#userOrder = userOrder;
  }

  updateDate(inputDate) {
    this.#date = inputDate;
  }

  getDate() {
    return this.#date;
  }

  updateFood(inputOrder) {
    this.#userOrder = inputOrder;
  }

  getUserOrder() {
    return this.#userOrder;
  }
}

export default PlannerData;
