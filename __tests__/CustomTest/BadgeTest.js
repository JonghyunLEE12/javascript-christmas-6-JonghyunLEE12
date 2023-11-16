// 코드리뷰
/* eslint-disable max-lines-per-function */
import { OUTPUT_MSG } from '../../src/domain/constants/PlannerMsg.js';

describe('배지 테스트', () => {
  const testCases = [
    { amount: 1000, expected: '없음' },
    { amount: 4900, expected: '없음' },
    { amount: 5000, expected: '별' },
    { amount: 9900, expected: '별' },
    { amount: 10000, expected: '트리' },
    { amount: 19999, expected: '트리' },
    { amount: 20000, expected: '산타' },
    { amount: 50000, expected: '산타' },
  ];

  testCases.forEach((testCase) => {
    test(`배지 테스트 : ${testCase.amount}`, () => {
      expect(OUTPUT_MSG.userBadge(testCase.amount)).toBe(testCase.expected);
    });
  });
});
