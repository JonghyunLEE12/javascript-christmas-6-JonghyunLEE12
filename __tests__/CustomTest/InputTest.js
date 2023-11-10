/* eslint-disable max-lines-per-function */
import InputValidator from '../../src/domain/utils/InputValidator.js';

describe('날짜 테스트', () => {
  const userInput = new InputValidator();
  const testCases = [
    { date: 'a', expectedError: '[ERROR]' },
    { date: 32, expectedError: '[ERROR]' },
  ];

  testCases.forEach((testCase) => {
    test(`날짜 테스트, 날짜: ${testCase.date}`, async () => {
      await expect(userInput.dateValidate(testCase.date)).rejects.toThrow(
        testCases.expectedError,
      );
    });
  });
});

describe('메뉴 테스트', () => {
  const menuValidate = new InputValidator();
  const testCases = [
    { menu: ['짬뽕-1'], expectedError: '[ERROR]' },
    { menu: ['티본스테이크-0'], expectedError: '[ERROR]' },
    { menu: ['티본스테이크-1.5'], expectedError: '[ERROR]' },
    { menu: ['티본스테이크-a'], expectedError: '[ERROR]' },
    { menu: ['제로콜라1', '레드와인1'], expectedError: '[ERROR]' },
    { menu: ['김밥-1', '떡볶이-1'], expectedError: '[ERROR]' },
    { menu: ['제로콜라-일', '레드와인-이'], expectedError: '[ERROR]' },
    { menu: ['제로콜라-a', '레드와인-b'], expectedError: '[ERROR]' },
    { menu: ['해산물파스타-2', '해산물파스타-1'], expectedError: '[ERROR]' },
  ];

  testCases.forEach((testCase) => {
    test(`메뉴 테스트, 메뉴: ${testCase.menu}`, async () => {
      await expect(menuValidate.menuValidate(testCase.menu)).rejects.toThrow(
        testCase.expectedError,
      );
    });
  });
});
