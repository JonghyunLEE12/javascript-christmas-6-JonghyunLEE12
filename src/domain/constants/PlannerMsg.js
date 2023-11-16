export const STATUS_MSG = {
  welcomeMsg: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  showPlanner: (date) =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
  orderMenu: '<주문 메뉴>',
  totalAmount: '\n<할인 전 총주문 금액>',
  giftMenu: '\n<증정 메뉴>',
  userBenefit: '\n<혜택 내역>',
  totalBenefit: '\n<총혜택 금액>',
  payment: '\n<할인 후 예상 결제 금액>',
  eventBadge: '\n<12월 이벤트 배지>',
};

export const EVENT = {
  christmas: '크리스마스 디데이 할인:',
  weekDay: '평일 할인:',
  weekendDay: '주말 할인:',
  specialDay: '특별 할인:',
  benefitEvent: '증정 이벤트:',
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
    '[ERROR] 음식은 최대 20개 까지만 주문 가능합니다. 다시 입력해주세요.',
};

export const OUTPUT_MSG = {
  userOrder: (order) => `${order[0]} ${order[1]}개`,
  totalAmount: (amount) => `${amount.toLocaleString()}원`,
  giftMenu: (amount) => (amount >= 120000 ? '샴페인 1개' : '없음'),
  noBenefit: '없음',
  userBenefit: (event) => {
    const eventMessage = {
      christmas: `${EVENT.christmas} -${event[1].toLocaleString()}원`,
      weekDay: `${EVENT.weekDay} -${event[1].toLocaleString()}원`,
      weekendDay: `${EVENT.weekendDay} -${event[1].toLocaleString()}원`,
      specialDay: `${EVENT.specialDay} -${event[1].toLocaleString()}원`,
      benefitEvent: `${EVENT.benefitEvent} -${event[1].toLocaleString()}원`,
    };
    return eventMessage[event[0]];
  },
  totalBenefit: (total) => {
    return total === 0 ? '0원' : `-${total.toLocaleString()}원`;
  },

  userPayment: (payment) => `${payment.toLocaleString()}원`,
  userBadge: (amount) => {
    if (amount < 5000) {
      return '없음';
    }
    if (amount >= 5000 && amount < 10000) {
      return '별';
    }
    if (amount >= 10000 && amount < 20000) {
      return '트리';
    }
    return '산타';
  },
};
