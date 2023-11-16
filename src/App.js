// 코드리뷰
import PlannerController from './domain/controller/PlannerController.js';

class App {
  #PLANNER;

  constructor() {
    this.#PLANNER = new PlannerController();
  }

  async run() {
    await this.#PLANNER.plannerStart();
  }
}

export default App;
