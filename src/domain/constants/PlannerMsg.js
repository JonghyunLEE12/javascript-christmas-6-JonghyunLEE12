export const STATUS_MSG = {
  welcomeMsg: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  showPlanner: (date) =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
  orderMenu: '<주문 메뉴>',
  totalAmount: '\n<할인 전 총주문 금액>',
  giftMenu: `\n<증정 메뉴>`,
};

export const INPUT_MSG = {
  inputVisitDay:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  orderMenu:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
};

export const ERROR_MSG = {
  dateError: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  notInMenu: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  drinkError: '[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.',
  totalError:
    '[ERROR] 음식은 최대 20개 까지만 주문 가능합니다. 다시 입력해주세요',
};

export const OUTPUT_MSG = {
  userOrder: (order) => `${order[0]} ${order[1]}개`,
  totalAmount: (amount) => `${amount.toLocaleString()}원`,
  giftMenu: (amount) => (amount >= 120000 ? '샴페인 1개' : '없음'),
};
