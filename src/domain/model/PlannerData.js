class PlannerData {
  #date;

  constructor(date = 0) {
    this.#date = date;
  }

  getDate(inputDate) {
    this.#date = inputDate;
    return this.#date;
  }
}

export default PlannerData;
