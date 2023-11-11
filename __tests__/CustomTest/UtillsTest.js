/* eslint-disable max-lines-per-function */
import PlannerUtils from '../../src/domain/utils/PlannerUtills.js';

describe('유틸 테스트', () => {
  const testCases = [
    { data: ['티본스테이크-5'], expected: 275000 },
    {
      data: ['티본스테이크-5', '제로콜라-5', '아이스크림-5'],
      expected: 275000 + 15000 + 25000,
    },
  ];

  testCases.forEach((testCase) => {
    test(`총 금액 테스트 : ${testCase.data}`, async () => {
      //
      const plannerUtil = new PlannerUtils(testCase.data);
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
      date: '25',
      expected: expectedObj,
    },
  ];

  testCases.forEach((testCase) => {
    test(`총 금액 테스트 : ${testCase.date}일`, async () => {
      const plannerUtil = new PlannerUtils(testCase.menu, testCase.date);
      await expect(plannerUtil.benefitCheck()).toStrictEqual(testCase.expected);
    });
  });
});

describe('유틸 테스트', () => {
  const expected = 3400 + 4046 + 1000 + 25000;

  const testCases = [
    {
      menu: ['티본스테이크-5', '초코케이크-2'],
      date: '25',
    },
  ];

  testCases.forEach((testCase) => {
    test(`총 금액 테스트 : ${testCase.date}일`, async () => {
      const plannerUtil = new PlannerUtils(testCase.menu, testCase.date);
      plannerUtil.benefitCheck();
      plannerUtil.calcBenefitAmount();
      await expect(plannerUtil.calcBenefitAmount()).toBe(expected);
    });
  });
});

describe('유틸 테스트', () => {
  const testCases = [
    {
      menu: ['티본스테이크-5', '초코케이크-2'],
      date: '25',
    },
  ];

  testCases.forEach((testCase) => {
    test(`총 금액 테스트 : ${testCase.date}일`, async () => {
      const plannerUtil = new PlannerUtils(testCase.menu, testCase.date);
      plannerUtil.benefitCheck();
      plannerUtil.calcBenefitAmount();
      // eslint-disable-next-line prettier/prettier
      const expected = plannerUtil.getTotalAmount() - plannerUtil.calcBenefitAmount();
      await expect(plannerUtil.calcTotalPayment()).toBe(expected);
    });
  });
});
