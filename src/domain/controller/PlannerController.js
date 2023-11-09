import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';
import PlannerData from '../model/PlannerData.js';

class PlannerController {
  constructor() {
    this.PLANNER_DATA = new PlannerData();
  }

  async plannerStart() {
    OutputView.printWelcome();
    await this.inputVisitDay();
  }

  async inputVisitDay() {
    await InputView.readDate();
  }
}

export default PlannerController;
