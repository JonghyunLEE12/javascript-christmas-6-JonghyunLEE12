import OutputView from '../views/OutputView.js';
import InputView from '../views/InputView.js';
import PlannerData from '../model/PlannerData.js';
import PlannerUtils from '../utils/PlannerUtills.js';
import { STATUS_MSG } from '../constants/PlannerMsg.js';

class PlannerController {
  constructor() {
    this.PLANNER_DATA = new PlannerData();
  }

  async plannerStart() {
    OutputView.printStatusMsg(STATUS_MSG.welcomeMsg);
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

  #showPlanner() {
    OutputView.printStatusMsg(
      STATUS_MSG.showPlanner(this.PLANNER_DATA.getDate()),
    );
    this.#showOrderMenu();
  }

  #showOrderMenu() {
    OutputView.printStatusMsg(STATUS_MSG.orderMenu);
    OutputView.printOrderMenu(this.PLANNER_DATA.getUserOrder());
    this.#totalOrderAmount();
  }

  #totalOrderAmount() {
    OutputView.printStatusMsg(STATUS_MSG.totalAmount);
    const plannerUtils = new PlannerUtils(this.PLANNER_DATA.getUserOrder());
    plannerUtils.getTotalAmount();
    this.PLANNER_DATA.updateTotalAmount(plannerUtils.getTotalAmount());
    OutputView.printTotalAmount(this.PLANNER_DATA.getTotalAmount());
    this.#giftCheck();
  }

  #giftCheck() {
    OutputView.printStatusMsg(STATUS_MSG.giftMenu);
    OutputView.printGift(this.PLANNER_DATA.getTotalAmount());
    this.#benefitCheck();
  }

  #benefitCheck() {
    OutputView.printStatusMsg(STATUS_MSG.userBenefit);
    const plannerUtils = new PlannerUtils(
      this.PLANNER_DATA.getUserOrder(),
      this.PLANNER_DATA.getDate(),
    );
    this.#showBenefits(plannerUtils.benefitCheck(), plannerUtils);
  }

  #showBenefits(benefitObject, plannerUtils) {
    OutputView.printBenefits(benefitObject);
    this.#showTotalBenefit(plannerUtils);
  }

  #showTotalBenefit(plannerUtils) {
    plannerUtils.calcBenefitAmount();
  }
}

export default PlannerController;
