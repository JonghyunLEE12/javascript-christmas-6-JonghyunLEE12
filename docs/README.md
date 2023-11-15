# :computer: [FE] JonghyunLEE12



# :dart: 미션 - 크리스마스 프로모션

### `12월 이벤트를 위한 이벤트 플래너 개발한다`



## 메뉴

```
<애피타이저>
양송이수프(6,000), 타파스(5,500), 시저샐러드(8,000)

<메인>
티본스테이크(55,000), 바비큐립(54,000), 해산물파스타(35,000), 크리스마스파스타(25,000)

<디저트>
초코케이크(15,000), 아이스크림(5,000)

<음료>
제로콜라(3,000), 레드와인(60,000), 샴페인(25,000)
```



## 할인 종류 및 조건

#### 1. 크리스마스 디데이 할인

- 이벤트 기간 : 2023.12.1 ~ 2023.12.25
- 1000원으로 시작하여 크리스마스가 다가올수록 날마다 할인 금액이 100원씩 증가한다.
- 총 주문 금액에서 해당 금액 만큼 할인

#### 2. 평일 할인

- (일요일 ~ 목요일) : 디저트 메뉴를 메뉴 1개당 2,023원 할인

#### 3. 주말 할인

- (금요일, 토요일) : 메인 메뉴를 메뉴 1개당 2,023원 할인

#### 4. 특별 할인

- 이벤트 달력에 별이 있으면, 총 주문 금액에서 1,000원 할인

#### 5. 증정 이벤트

- `할인 전 총 주문 금액` 이 12만원 이상일 때, 샴페인 1개 증정

#### 6. 이벤트 기간

- `크리스마스 디데이 할인` 을 제외한 다른 이벤트는 `2023.12.1 ~ 2023.12.31` 동안 적용



## 혜택 금액에 따른 12월 이벤트 배지 부여

#### `총혜택 금액`에 따라 다른 이벤트 배지를 부여

- 5천원 이상 : 별
- 1만원 이상 : 트리
- 2만원 이상 : 산타



## 이벤트 주의사항

##### 1. `총 주문 금액 10,000원 이상`부터 이벤트가 적용된다.

##### 2. `음료만 주문`시, 주문할 수 없다.

##### 3. 메뉴는 한 번에 `최대 20개` 까지만 주문할 수 있다.



## 개발 요청 사항

#### 1. 방문할 날짜와 메뉴를 미리 선택하면, 

##### 	이벤트 플래너가

##### 		주문 메뉴, 할인 전 총 주문 금액, 증정 메뉴, 혜택 내역,

##### 		총 혜택금액, 할인 후 예상 결제 금액, 12월 이벤트 배지

##### 	내용을 보여줘야 한다.

#### 2. 예외 처리

##### 1. 방문할 날짜는 1 이상 31 이하의 숫자로만 입력 받는다.

- 1 이상 31 이하의 숫자가 아닌 경우, "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요."

##### 2. 고객이 메뉴판에 없는 메뉴를 입력하는 경우

-  "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."

##### 3. 메뉴의 개수는 1이상의 숫자만 입력돼야 한다.

-  "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."

##### 4. 메뉴의 형식이 예시와 다른 경우

-  "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."

##### 5. 중복 메뉴를 입력한 경우(e.g. 시저샐러드-1,시저샐러드-1)

-  "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."



#### 3. 주문 메뉴의 출력 순서는 자유롭게

#### 4. 총 혜택에 따라 이벤트 배지의 이름을 다르게 보여주기

#### 5. 총 혜택 금액 = 할인 금액의 합계 + 증정 메뉴의 가격

#### 6. 할인 후 예상 결제 금액 = 할인 전 총 주문 금액 - 할인 금액

#### 7. 증정 메뉴

- 증정 미벤트에 해당하지 않는 경우, 증정 메뉴 "없음" 으로 보여주기

#### 8. 혜택 내역

- 고객에게 적용된 이벤트 내역만 보여주기
- 적용된 이벤트가 하나도 없다면 혜택 내역 "없음" 으로 보여주기
- 혜택 내용에 여러 개의 이벤트가 적용된 경우, 출력 순서는 자유롭게 출력

#### 9. 이벤트 배지

- 이벤트 배지가 부여되지 않는 경우, "없음" 으로 보여주기

# :white_check_mark: 구현 로직 순서



- [x] 12월 식당 예상 방문날짜 입력 받기

  - [x] 방문 날짜 유효성 검사 ( 1 부터 31 까지의 숫자 ) 및 테스트케이스 작성

    

- [x] 주문 메뉴와 개수 입력 받기(e.g. 해산물파스타-2, 레드와인-1,초코케이크-1)

  - [x] 주문 메뉴에 대한 유효성 검사 

    - [x] 고객이 메뉴판에 없는 메뉴 입력하는 경우

      - [x] 테스트케이스 작성

    - [x] 메뉴의 개수는 1이상의 숫자

      - [x] 테스트케이스 작성

    - [x] 메뉴의 형식 검사
    
      - [x] 테스트케이스 작성
    
    - [x] 중복 메뉴 검사
    
      - [x] 테스트케이스 작성
    
    - [x] 음료만 주문 시, 주문할 수 없음
    
      - [x] 테스트케이스 작성
    
    - [x] 메뉴는 한 번에 최대 20개 까지만 주문 가능
    
      - [x] 테스트케이스 작성
    
      

- [x] 이벤트 플래너 내용 출력하기

  - [x] 주문 메뉴 출력
  - [x] 할인 전 총 주문 금액 계산
    - [x] 할인 전 총 주문 금액 출력
  - [x] 증정 메뉴 검사
    - [x] 증정 메뉴 출력, 없을땐 "없음"
  - [x] 고객에게 적용된 이벤트 내역 확인
    - [x] 크리스마스 이벤트 확인
    - [x] 평일 이벤트 확인
    - [x] 주말 이벤트 확인
    - [x] 특별 이벤트 확인
    - [x] 증정 이벤트 확인
    - [x] 혜택 내역 출력, 없을땐 "없음"
    - [x] 여러개인 경우, 출력순서는 자유롭게
    
  - [x] 총혜택 금액 검사
    - [x] 총혜택 금액 출력, 없을땐 "0원"
  - [x] 할인 후 예상 결제 금액 출력
  - [x] 12월 이벤트 배지 검사
    - [x] 12월 이벤트 배지 검사 출력, 없을땐 "없음"
  
  

# :heavy_check_mark: 커밋 컨벤션

```
feat (feature)
fix (bug fix)
docs (documentation)
style (formatting, missing semi colons, …)
refactor
test (when adding missing tests)
chore (maintain)
```



# :sos: 고민

#### :one:  메뉴에 대한 유효성 검사를 어떻게 할것인가?

현재 메뉴 전체를 다음과 같이 정의하였다

```js
export const FOOD_MENU = {
  appetizer: {
    soup: ['양송이수프', 6000],
    tapas: ['타파스', 5500],
    salad: ['시저샐러드', 8000],
  },
  main: {
    stake: ['티본스테이크', 55000],
    barbeque: ['바비큐립', 54000],
    seafood: ['해산물파스타', 35000],
    christmas: ['크리스마스파스타', 2500],
  },
  dessert: {
    cake: ['초코케이크', 15000],
    iceCream: ['아이스크림', 5000],
  },
  drink: {
    coke: ['제로콜라', 3000],
    wine: ['레드와인', 60000],
    champane: ['샴페인', 25000],
  },
};
```



이 과정에서 입력 메뉴에 대한 유효성 검사를 어떻게 하면 좋을까?

#### :heavy_exclamation_mark: 해결

canOrder 라는 리스트를 만들고, 각각의 메뉴의 이름을 넣어주자

```js
#menuCheck(menu) {
    const canOrder = [];
    Object.keys(FOOD_MENU).map((course) =>
      this.#makeCanOrder(course, canOrder),
    );
    console.log(canOrder);
  }

  #makeCanOrder(course, canOrder) {
    Object.values(FOOD_MENU[`${course}`]).map((menu) => canOrder.push(menu[0]));
  }

// 결과
[
        '양송이수프',
        '타파스',
        '시저샐러드',
        '티본스테이크',
        '바비큐립',
        '해산물파스타',
        '크리스마스파스타',
        '초코케이크',
        '아이스크림',
        '제로콜라',
        '레드와인',
        '샴페인'
      ]
```



#### :two: InputValidate가 너무 많은 일을 하고있지 않을까?

Input 값에 대한 유효성 검사를 한 파일에다 작성하려고 하니, 너무 많은 줄의 코드가 나올꺼 같다. 

#### :heavy_exclamation_mark: 해결

validator 폴더를 만들어 주고 사용되는 유효성 검사를 각각 객체화 해줬다.

또한 이 과정에서 3주차 공통 피드백에 있던

 `데이터를 꺼내지(get) 말고 메시지를 던지도록 구조를 바꿔 데이터를 가지는 객체가 일하도록 한다.`

내용을 적용하기로 하였다.

```js
class InputValidator {
  #REGAX;

  constructor() {
    this.#REGAX = /\s|[!@#$%^&*(),?":{}|<>]|[a-zA-Z]/;
  }

  async dateValidate(date) {
    const dateValidator = new DateValidate(this.#REGAX, date);
    dateValidator.regaxCheck();
    dateValidator.rangeCheck();
  }

  async menuValidate(menu) {
    // MenuValidate.menuCheck(menu);
    const menuValidator = new MenuValidate(menu);
    menuValidator.menuCheck(menu);
  }
}

export default InputValidator;

```



```js
import { ERROR_MSG } from '../../constants/PlannerMsg.js';

class DateValidate {
  #regax;

  #date;

  constructor(regax, date) {
    this.#regax = regax;
    this.#date = date;
  }

  regaxCheck() {
    if (this.#regax.test(this.#date)) {
      throw new Error(ERROR_MSG.dateError);
    }
  }

  rangeCheck() {
    if (this.#date <= 0 || this.#date > 31) {
      throw new Error(ERROR_MSG.dateError);
    }
  }
}

export default DateValidate;

```



다음과 같이 리팩토링을 진행하여, InputValidator 클래스를 나눠 주었다.



#### :three: 테스트를 먼저 작성하는게 나을까?, 기능 구현 후 테스트를 작성하는게 나을까?

작은 단위의 로직을 부터 테스트를 해 나가던 중, 테스트를 기능 구현 전,후 언제 작성하는것이 좋을까에 대한

고민이 들었다.



기능 전 테스트 작성 및 기능 후 테스트 작성 두가지르 모두 해보면서 직접 느껴보기로 했다.



#### :heavy_exclamation_mark: 해결

기능 구현 전 테스트 코드를 작성 했을 때, 내가 쓴 로직에 대한 피드백을 바로 받을 수 있다는 점이

장점이었다. 기능 구현 후 테스트 작성은 내가 써놓은 코드에 테스트를 맞추는 느낌이었다면,

구현 전 테스트 작성은 내가 쓴 코드에 대한 피드백을 받고 로직을 고쳐나갈 수 있다는 점에서 좋았다.

앞으로 기능 구현 전 테스트 작성을 해야할거 같다.

#### 



#### :four: 총 주문 금액을 구하는 로직에서 시간이 너무 오래걸린다.



총 주문 금액을 구하는 로직에서 실행시간이 너무 오래 걸렸다.

주어진 로직을 리팩토링 하는게 좋다고 생각했다.



#### :heavy_exclamation_mark: 해결

기존 로직

```js
export const FOOD_MENU = {
  appetizer: {
    soup: ['양송이수프', 6000],
    tapas: ['타파스', 5500],
    salad: ['시저샐러드', 8000],
  },
  main: {
    stake: ['티본스테이크', 55000],
    barbeque: ['바비큐립', 54000],
    seafood: ['해산물파스타', 35000],
    christmas: ['크리스마스파스타', 2500],
  },
  dessert: {
    cake: ['초코케이크', 15000],
    iceCream: ['아이스크림', 5000],
  },
  drink: {
    coke: ['제로콜라', 3000],
    wine: ['레드와인', 60000],
    champane: ['샴페인', 25000],
  },
};  


getTotalAmount() {
      const amountSum = [];
      const orderList = this.#userOrder.map((order) => order.split('-'));
      this.#sumAmount(amountSum, orderList);
      return amountSum.reduce((total, each) => total + each);
    }

    #sumAmount(amountSum, orderList) {
      orderList.forEach((order) => {
        this.#orderCheck(amountSum, order);
      });
    }

    #orderCheck(amountSum, order) {
      Object.values(FOOD_MENU).forEach((course) => {
        this.#eachCheck(amountSum, order, course);
      });
    }

    #eachCheck(amountSum, order, course) {
      Object.values(course).forEach((menu) => {
        if (order[0] === menu[0]) {
          amountSum.push(menu[1] * Number(order[1]));
        }
      });
    }
```



리팩토링 후

```js
export const FOOD_MENU = {
  appetizer: {
    soup: ['양송이수프', 6000],
    tapas: ['타파스', 5500],
    salad: ['시저샐러드', 8000],
  },
  main: {
    stake: ['티본스테이크', 55000],
    barbeque: ['바비큐립', 54000],
    seafood: ['해산물파스타', 35000],
    christmas: ['크리스마스파스타', 2500],
  },
  dessert: {
    cake: ['초코케이크', 15000],
    iceCream: ['아이스크림', 5000],
  },
  drink: {
    coke: ['제로콜라', 3000],
    wine: ['레드와인', 60000],
    champane: ['샴페인', 25000],
  },
};

getTotalAmount() {
    const MENU_COST = {};
    Object.values(FOOD_MENU).forEach((course) => {
      Object.values(course).forEach((menu) => {
        MENU_COST[menu[0]] = menu[1];
      });
    });
    return this.#sumAmount(MENU_COST);
  }

  #sumAmount(MENU_COST) {
    const totalAmount = [];
    this.#userOrder.forEach((order) => {
      const [menu, cost] = order.split('-');
      totalAmount.push(MENU_COST[menu] * Number(cost));
    });
    return totalAmount.reduce((total, cost) => total + cost);
  }
```



기존에는 주어진 FOOD_MENU를 그대로 활용해서 로직을 구현했다.

그러다 보니 반복문에 대한 깊이가 깊어지고, 이는 구현 시간에 영향을 미친거 같다.

새로운 로직에선 기존 FOOD_MENU 에서 음식이름 : 값 을 추출한 새로운 객체를 만들어 사용했다.

이로써 시간이 기존 0.9초 ~ 1초 대에서 0.4초 ~ 0.6초로 줄일 수 있었다.





#### :five:  주말,평일 이벤트 확인 로직 리팩토링

현재 `주말에는 메인 메뉴 개수 당 2023원 할인, 평일에는 디저트메뉴 개당 2023할인` 을 확인 하는 

로직이 중복 되어 있다. 해당 코드를 리팩토링 하여 재사용성을 높여 보자

리팩토링 전

```js
#weekDaysCheck() {
    if (DAY_OF_WEEK.weekDay.includes(this.#userDay)) {
      return this.#checkDessertMenu() * 2023;
    }
    return 0;
  }

  #checkDessertMenu() {
    const numberOfDessert = [0];
    const userMenu = this.#userOrder.map((order) => order.split('-'));
    const dessertMenu = Object.values(FOOD_MENU.dessert).map(
      (dessert) => dessert[0],
    );
    userMenu.forEach((menu) => {
      if (dessertMenu.includes(menu[0])) {
        numberOfDessert.push(Number(menu[1]));
      }
    });
    return numberOfDessert.reduce((total, amount) => total + amount);
  }

  #weekendDayCheck() {
    if (DAY_OF_WEEK.weekendDay.includes(this.#userDay)) {
      return this.#checkMainMenu() * 2023;
    }
    return 0;
  }

  #checkMainMenu() {
    const numberOfMain = [0];
    const userMenu = this.#userOrder.map((order) => order.split('-'));
    const mainMenu = Object.values(FOOD_MENU.main).map((main) => main[0]);
    userMenu.forEach((menu) => {
      if (mainMenu.includes(menu[0])) {
        numberOfMain.push(Number(menu[1]));
      }
    });
    return numberOfMain.reduce((total, amount) => total + amount);
  }
```



리팩토링 후

```js
#checkEventMenu(event) {
    const numberOfMenu = [0];
    const userMenu = this.#userOrder.map((order) => order.split('-'));
    const eventMenu = Object.values(FOOD_MENU[event]).map((menu) => menu[0]);
    userMenu.forEach((menu) => {
      if (eventMenu.includes(menu[0])) {
        numberOfMenu.push(Number(menu[1]));
      }
    });
    return numberOfMenu.reduce((total, amount) => total + amount);
  }
```



다음과 같이 리팩토링하여, 기존의 평일,주말 별 이벤트 메뉴들을 리팩토링 할 수 있었다.



#### :six:  총 혜택 금액 과 할인 후 예상 결제 금액

요구사항에선

 `총혜택 금액 = 할인 금액의 합계 + 증정 메뉴의 가격`

`할인 후 예상 결제 금액 = 할인 전 총주문 금액 - 할인 금액`

으로 나와있다.

총 결제 금액에서는 할인 금액의 합계만 계산 되어야한다.



기존 로직에서는 할인 금액에 증정 메뉴의 가격이 포함되어있어  총 결제 금액이 다르게 나온다.

이를 수정해야겠다.





#### :heavy_exclamation_mark: 해결

```js
calcTotalPayment() {
    if (this.#userEvent.benefitEvent !== 0) {
      return this.getTotalAmount() - this.calcBenefitAmount() + 25000;
    }
    return this.getTotalAmount() - this.calcBenefitAmount();
  }
```



this.#userEvent.benefitEvent 는 사용자의 금액에서 증정 금액이 포함되어있다.

만약 증정 금액이 있으면, 최종 결제 금액에서 증정 금액 만큼을 더해주고,

아닐 경우 총 할인 금액만큼을 최종 결제 금액에서 빼주는 것으로 수정했다.



#### :seven: PlannerUtils 호출 와 PlannerData.js 리팩토링

현재 PlannerData.js 는 날짜, 주문, 총 주문 금액 등 3개의 필드를 가지고 있다.

하지만 총 주문 금액 같은 경우는 PlannerUtils에서 주문에 대하여 값을 던져주고 있으므로,

해당 필드는 굳이 저장하지 않아도 괜찮을 거 같다.



#### :heavy_exclamation_mark: 해결

이전 코드 

```js
class PlannerData {
  #date;

  #userOrder;

  #totalAmount;

  constructor(date = 0, userOrder = [], totalAmount = 0) {
    this.#date = date;
    this.#userOrder = userOrder;
    this.#totalAmount = totalAmount;
  }

  updateDate(inputDate) {
    this.#date = inputDate;
  }

  getDate() {
    return this.#date;
  }

  updateFood(inputOrder) {
    this.#userOrder = inputOrder;
  }

  getUserOrder() {
    return this.#userOrder;
  }

  updateTotalAmount(totalAmount) {
    this.#totalAmount = totalAmount;
  }

  getTotalAmount() {
    return this.#totalAmount;
  }
}

export default PlannerData;

// 호출 부 PlannerController.js

#totalOrderAmount() {
    OutputView.printStatusMsg(STATUS_MSG.totalAmount);
    const plannerUtils = new PlannerUtils(this.PLANNER_DATA.getUserOrder());
    plannerUtils.getTotalAmount();
    this.PLANNER_DATA.updateTotalAmount(plannerUtils.getTotalAmount());
    OutputView.printTotalAmount(this.PLANNER_DATA.getTotalAmount());
    this.#giftCheck();
 }

```



리팩토링 후

```js
class PlannerData {
  #date;

  #userOrder;

  constructor(date, userOrder) {
    this.#date = date;
    this.#userOrder = userOrder;
  }

  updateDate(inputDate) {
    this.#date = inputDate;
  }

  getDate() {
    return this.#date;
  }

  updateFood(inputOrder) {
    this.#userOrder = inputOrder;
  }

  getUserOrder() {
    return this.#userOrder;
  }
}

export default PlannerData;

// 호출 부

#totalOrderAmount() {
    OutputView.printStatusMsg(STATUS_MSG.totalAmount);
    const plannerUtils = new PlannerUtils(
      this.PLANNER_DATA.getUserOrder(),
      this.PLANNER_DATA.getDate(),
    );
    OutputView.printTotalAmount(plannerUtils.getTotalAmount());
    this.#giftCheck(plannerUtils);
  }
```



3주차 프리코스 공통 리뷰에 

`필드의 수를 줄이기 위해 노력한다`

라는 리뷰가 있었다. totalAmount 는 유저의 주문을 기반으로 구할 수 있는 수고 이를 함수로 return 해주면서 코드가 더욱 간결해졌다. 또한 상위 메소드에서 사용한 PlannerUtils를 계속 재사용 할 수 있도록 리팩토링 진행하였다.



#### :eight: PlannerData.js 리팩토링

현재 PlannerDate.js 는 사용자 입력값과 주문을 담고 있는 변수 이다

하지만 데이터를 가져오는  과정에서 

```js
getUserOrder() {
    return this.#userOrder;
  }
```



현재 객체는 공통 피드백에 있던

`데이터를 꺼내지(get) 말고 메시지를 던지도록 구조를 바꿔 데이터를 가지는 객체가 일하도록 한다.`

해당 내용에 맞지 않는 거 같다.

이번 리팩토링을 통해 객체가 일하도록 수정 해야겠다.



#### :heavy_exclamation_mark: 해결

```js
getUserOrder() {
    return this.#userOrder.map((order) => order.split('-'));
  }
```



다음과 깉이 리팩토링 후 다음과 OutputView 와 LottoUtils에서의 함수 재사용을 줄일 수 있었다.

기존 코드에선

```js
const userMenu = this.#userOrder.map((order) => order.split('-'));
```

와 같이 입력된 사용자의 주문을 다시한번 재가공 해야했지만

```js
this.#userOrder.forEach((menu) => {
      if (eventMenu.includes(menu[0])) {
        numberOfMenu.push(Number(menu[1]));
      }
    });
```

와 같이 재사용을 줄이고 주어진 필드를 바로 활용할 수 있었다.



#### :nine: '12' 와  ' 12' Validator

현재의 입력에서는 '12', ' 12' 두개의 날짜 입력에 대해 동일한 처리를 해준다.

하지만 메뉴의 입력에서는 '해산물파스타-1', '해산물파스타 - 2'는 다른 결과를 가져온다.

숫자 입력 부분에서 날짜입력에서는 띄어쓰기를 허용하고, 메뉴에서는 띄어쓰기를 허용하지 않는다.

이러한 부분은 통일성에 어긋난다고 생각하여, 날짜에 입력에서도 띄어쓰기에 대해 예외처리를

해주기로 하였다.



#### :heavy_exclamation_mark: 해결

```js
// 리팩토링 전
async readDate() {
    const userDate = await Console.readLineAsync(INPUT_MSG.inputVisitDay);
    await this.INPUT_VAL.dateValidate(Number(userDate));
    return userDate;
  }
// 리팩토링 후
async readDate() {
    const userDate = await Console.readLineAsync(INPUT_MSG.inputVisitDay);
    await this.INPUT_VAL.dateValidate(userDate);
    return userDate;
  }
```



리팩토링 전에는 유효성 검사를 하기전 사용자의 날짜를 숫자형으로 바꿔 유효성 검사를 진행했다.

하지만 리팩토링 후에는 입력 그대로의 값을 전달하기로 했다.

```js
// 리팩토링 전
safeCheck() {
    if (!Number.isSafeInteger(this.#date)) {
      throw new Error(ERROR_MSG.dateError);
    }
  }

  rangeCheck() {
    if (this.#date <= 0 || this.#date > 31) {
      throw new Error(ERROR_MSG.dateError);
    }
  }

// 리팩토링 후
safeCheck() {
    if (!Number.isSafeInteger(Number(this.#date))) {
      throw new Error(ERROR_MSG.dateError);
    }
  }

  rangeCheck() {
    if (Number(this.#date) <= 0 || Number(this.#date) > 31) {
      throw new Error(ERROR_MSG.dateError);
    }
  }
```



따라서 메뉴에 대한 유효성 검사 부분 역시 리팩토링이 발생했다.

Number.isSafeInteger() 메소드는 순수한 숫자형의 값을 판별하기 때문에, '1' 같은 문자형 자료가

들어왔을 때 false를 return 해준다. 따라서 검사 값을 Number() 형으로 바꿔 준 후 메소드에 적용하였다.





# :open_file_folder: 폴더구조

```
src
    ├── App.js
    ├── domain
    │   ├── constants
    │   │   ├── Constants.js
    │   │   ├── FoodMenu.js
    │   │   └── PlannerMsg.js
    │   ├── controller
    │   │   └── PlannerController.js
    │   ├── model
    │   │   └── PlannerData.js
    │   ├── utils
    │   │   ├── InputValidator.js
    │   │   ├── PlannerUtills.js
    │   │   └── validator
    │   │       ├── DateValidate.js
    │   │       └── MenuValidate.js
    │   └── views
    │       ├── InputView.js
    │       └── OutputView.js
    └── index.js
```



# :rocket: 결과

![RESULT](./RESULT.png)

