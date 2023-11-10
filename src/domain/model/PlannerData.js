class PlannerData {
  #date;

  #userOrder;

  #totalAmount;

  constructor(date = 0, userOrder = [], totalAmount = 0) {
    this.#date = date;
    this.#userOrder = userOrder;
    this.#totalAmount = totalAmount;
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

  updateTotalAmount(totalAmount) {
    this.#totalAmount = totalAmount;
  }

  getTotalAmount() {
    return this.#totalAmount;
  }
}

export default PlannerData;
