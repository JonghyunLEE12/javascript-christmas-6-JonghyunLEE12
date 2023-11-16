// 코드리뷰
/* eslint-disable max-lines-per-function */
import InputValidator from '../../src/domain/utils/InputValidator.js';

describe('날짜 테스트', () => {
  const userInput = new InputValidator();
  const testCases = [
    { date: 'a', expectedError: '[ERROR]' },
    { date: ' ', expectedError: '[ERROR]' },
    { date: '이십오일', expectedError: '[ERROR]' },
    { date: '32', expectedError: '[ERROR]' },
    { date: '0', expectedError: '[ERROR]' },
    { date: '25.5', expectedError: '[ERROR]' },
    { date: '-1', expectedError: '[ERROR]' },
    { date: ' 12', expectedError: '[ERROR]' },
    { date: '1 2', expectedError: '[ERROR]' },
    { date: '12  ', expectedError: '[ERROR]' },
    { date: '  12  ', expectedError: '[ERROR]' },
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
    { menu: ['제로콜라-1'], expectedError: '[ERROR]' },
    { menu: ['레드와인-1', '제로콜라-1'], expectedError: '[ERROR]' },
    { menu: ['시저샐러드- 1', '제로콜라- 1'], expectedError: '[ERROR]' },
    {
      menu: ['레드와인-2', '제로콜라-2', '샴페인-2'],
      expectedError: '[ERROR]',
    },
    {
      menu: ['티본스테이크-10', '레드와인-20', '제로콜라-20'],
      expectedError: '[ERROR]',
    },
  ];

  testCases.forEach((testCase) => {
    test(`메뉴 테스트, 메뉴: ${testCase.menu}`, async () => {
      await expect(menuValidate.menuValidate(testCase.menu)).rejects.toThrow(
        testCase.expectedError,
      );
    });
  });
});
