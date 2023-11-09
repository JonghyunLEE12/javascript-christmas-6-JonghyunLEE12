class PlannerData {
  #date;

  constructor(date = 0) {
    this.#date = date;
  }

  updateDate(inputDate) {
    this.#date = inputDate;
    return this.#date;
  }

  getDate() {
    return this.#date;
  }
}

export default PlannerData;
