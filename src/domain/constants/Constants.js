export const EVENT_CONST = {
  christmas: 0,
  weekDay: 0,
  weekendDay: 0,
  specialDay: 0,
  benefitEvent: 0,
};

export const DAY_OF_WEEK = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
  weekDay: [0, 1, 2, 3, 4],
  weekendDay: [5, 6],
  specialDay: [0, 25],
};

export const UTILS_CONST = {
  userDay: (userDate) => `2023-12-${userDate}`,
  christmasBenefit: (userDate) => 1000 + (userDate - 1) * 100,
  minGetBenefit: 10000,
  christmasEventEnd: 25,
  noBenefit: 0,
  discount: 2023,
  weekDayEvent: 'dessert',
  weekendEvent: 'main',
  specialDiscount: 1000,
  minGetGift: 120000,
  giftCost: 25000,
};
