/* eslint-disable max-lines-per-function */
import InputValidator from '../../src/domain/utils/InputValidator.js';

describe('날짜 테스트', () => {
  test('날짜 범위 입력 에러', async () => {
    const userInput = new InputValidator();

    await expect(userInput.dateValidate(32)).rejects.toThrow('[ERROR]');
  });

  test('날짜 범위 입력 에러', async () => {
    const userInput = new InputValidator();

    await expect(userInput.dateValidate('a')).rejects.toThrow('[ERROR]');
  });
});

describe('메뉴 테스트', () => {
  test('메뉴 테스트, 메뉴판에 없는 메뉴', async () => {
    const menuValidate = new InputValidator();
    const menu = ['짬뽕-1'];

    await expect(menuValidate.menuValidate(menu)).rejects.toThrow('[ERROR]');
  });

  test('메뉴 테스트, 메뉴의 개수는 1이상의 숫자', async () => {
    const menuValidate = new InputValidator();
    const menu = ['티본스테이크-0'];

    await expect(menuValidate.menuValidate(menu)).rejects.toThrow('[ERROR');
  });
});
