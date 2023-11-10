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
