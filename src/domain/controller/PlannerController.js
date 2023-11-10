import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';
import PlannerData from '../model/PlannerData.js';

class PlannerController {
  constructor() {
    this.PLANNER_DATA = new PlannerData();
  }

  async plannerStart() {
    OutputView.printWelcome();
    await this.#inputVisitDay();
  }

  async #inputVisitDay() {
    try {
      const visitDate = await InputView.readDate();
      this.PLANNER_DATA.updateDate(visitDate);
      return this.#orderMenu();
    } catch (error) {
      OutputView.printError(error.message);
      return this.#inputVisitDay();
    }
  }

  async #orderMenu() {
    try {
      const foodAndAmount = await InputView.readMenu();
      this.PLANNER_DATA.updateFood(foodAndAmount);
      return this.#showPlanner();
    } catch (error) {
      OutputView.printError(error.message);
      return this.#orderMenu();
    }
  }

  async #showPlanner() {
    console.log(this.PLANNER_DATA.getUserOrder());
  }
}

export default PlannerController;
