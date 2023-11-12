/* eslint-disable max-lines-per-function */
import PlannerUtils from '../../src/domain/utils/PlannerUtills.js';
import PlannerData from '../../src/domain/model/PlannerData.js';

describe('유틸 테스트', () => {
  const testCases = [
    { menu: ['티본스테이크-5'], day: 25, expected: 275000 },
    {
      menu: ['티본스테이크-5', '제로콜라-5', '아이스크림-5'],
      day: 1,
      expected: 275000 + 15000 + 25000,
    },
  ];

  testCases.forEach((testCase) => {
    test(`총 금액 테스트 : ${testCase.menu}`, async () => {
      const PLANNER_DATA = new PlannerData();
      PLANNER_DATA.updateDate(testCase.day);
      PLANNER_DATA.updateFood(testCase.menu);
      const plannerUtil = new PlannerUtils(
        PLANNER_DATA.getUserOrder(),
        PLANNER_DATA.getDate(),
      );
      await expect(plannerUtil.getTotalAmount()).toBe(testCase.expected);
    });
  });
});

describe('유틸 테스트', () => {
  const expectedObj = {
    christmas: 3400,
    weekDay: 4046,
    weekendDay: 0,
    specialDay: 1000,
    benefitEvent: 25000,
  };

  const testCases = [
    {
      menu: ['티본스테이크-5', '초코케이크-2'],
      day: 25,
      expected: expectedObj,
    },
  ];

  testCases.forEach((testCase) => {
    test(`혜택 테스트 : ${testCase.menu}`, async () => {
      const PLANNER_DATA = new PlannerData();
      PLANNER_DATA.updateDate(testCase.day);
      PLANNER_DATA.updateFood(testCase.menu);
      const plannerUtil = new PlannerUtils(
        PLANNER_DATA.getUserOrder(),
        PLANNER_DATA.getDate(),
      );
      await expect(plannerUtil.benefitCheck()).toStrictEqual(testCase.expected);
    });
  });
});

describe('유틸 테스트', () => {
  const testCases = [
    {
      menu: ['티본스테이크-5', '초코케이크-2'],
      day: '25',
      expected: 3400 + 4046 + 1000 + 25000,
    },
    {
      menu: ['아이스크림-5', '초코케이크-2'],
      day: '21',
      expected: 3000 + 14161,
    },
  ];

  testCases.forEach((testCase) => {
    test(`총 혜택금액 테스트 : ${testCase.day}일`, async () => {
      const PLANNER_DATA = new PlannerData();
      PLANNER_DATA.updateDate(testCase.day);
      PLANNER_DATA.updateFood(testCase.menu);
      const plannerUtil = new PlannerUtils(
        PLANNER_DATA.getUserOrder(),
        PLANNER_DATA.getDate(),
      );
      plannerUtil.benefitCheck();
      await expect(plannerUtil.calcBenefitAmount()).toBe(testCase.expected);
    });
  });
});

describe('유틸 테스트', () => {
  const testCases = [
    {
      menu: ['티본스테이크-5', '초코케이크-2'],
      day: '25',
      discount: 3400 + 4046 + 1000,
    },
    {
      menu: ['아이스크림-5', '초코케이크-2'],
      day: '21',
      discount: 3000 + 14161,
    },
    {
      menu: ['크리스마스파스타-1', '레드와인-1', '초코케이크-1'],
      day: '12',
      discount: 2100 + 2023,
    },
  ];

  testCases.forEach((testCase) => {
    test(`할인 후 예상 결제 금액 : ${testCase.day}일`, async () => {
      const PLANNER_DATA = new PlannerData();
      PLANNER_DATA.updateDate(testCase.day);
      PLANNER_DATA.updateFood(testCase.menu);
      const plannerUtil = new PlannerUtils(
        PLANNER_DATA.getUserOrder(),
        PLANNER_DATA.getDate(),
      );
      plannerUtil.benefitCheck();
      const expected = plannerUtil.getTotalAmount() - testCase.discount;
      await expect(plannerUtil.calcTotalPayment()).toBe(expected);
    });
  });
});
