// pass by value : 원시 타입은 값이 복사되어 전달.
let num = 1;
let num2 = num;
console.log(num, num2);
console.log(num === num2); // true

num = 5;
console.log(num, num2); // 5, 1
console.log(num === num2); // false

// pass by reference
const arr = [1, 2];
arr.push(3); //const는 변하지 않는 함수 아닌교???라는 의문
console.log(arr);

const obj = { one: 1, two: 2 };
const obj2 = obj;
console.log(obj, obj2);
console.log(obj === obj2); //true
// obj와 obj2는 현재 같은 데이터도 같고 참조값 (address, 주소)도 같다.

// 참조값만 다른 경우
const obj3 = { one: 1, two: 2 };
const obj4 = { one: 1, two: 2 };
console.log(obj3, obj4);
console.log(obj3 === obj4); // false
// why? obj3와 obj4는 현재 같은 데이터를 같지만, 서로 다른 별도의 객체
// 즉, 참조값(address, 주소)가 다르다

obj.five = 5;
console.log(obj, obj2);
console.log(obj === obj2); //true

// primitive는 value로 접근하는것이고, object는 reference (주소, 참조)로 접근하는 것 (그 주소에 저장된 데이터가 출력되는 것)

// obj = { hi: 'hi' }; //obj가 const로 선언되어 재할당이 불가능하다. 즉, obj가 참조하고 있는 주소를 바꿀 수 없다.

//////////////////////////////////////
// 객체 리터럴 (object literal), 딕셔너리 : key-value 쌍으로 이루어진 데이터 구조를 일컬음 (더 좁은 의미)
// js에서 객체는 여러 의미 : 이 때의 객체는 광범위한 의미의 객체에 해당.

console.clear();

// js 표준 내장 객체
// 1. Date 객체 : 시간, 날짜
let now = new Date();
console.log(now);

// 타임스탬프 : 컴퓨터가 이해하기 쉬운 날짜계산으로 변환해주기 위해 (1970.1.1 기준으로 ms 단위에 의한 정수)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970);
let jan_02_1970 = new Date(24 * 3600 * 1000);
console.log(jan_02_1970);

// new Date(date_string)
let date1 = new Date('2023-07-17');
console.log(date1);
let date2 = new Date('2023', '06', '17'); // MM의 경우, 0월 부터 시작하므로, 00이 1월, 11이 12월을 의미함.
console.log(date2);

// 관련 메서드
console.table(date1.getFullYear());
console.table(date1.getMonth()); // 주의 : 0 ~ 11
console.table(date1.getDate());
console.table(date1.getHours());
console.table(date1.getMinutes());
console.table(date1.getSeconds());
// console.table(date1.getMilliSeconds());
console.table(date1.getDay()); // 0(일) ~ 6(토)

/////////////////////////

switch (now.getDay()) {
  case 0:
    console.log('일요일');
    break;
  case 1:
    console.log('월요일');
    break;
  case 2:
    console.log('화요일');
    break;
  case 3:
    console.log('수요일');
    break;
  case 4:
    console.log('목요일');
    break;
  case 5:
    console.log('금요일');
    break;
  case 6:
    console.log('토요일');
    break;
}

if (now.getDay() === 0 || now.getDay() === 6) {
  console.log('주말');
} else console.log('평일');

console.log(now.getDay());

//////////////////////////////
console.log(Math.E); // 자연로그
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근

//메서드
console.log(Math.min(100, -2, 0, 5));
console.log(Math.max(100, -2, 0, 5));
console.log(Math.round(5.23451)); // 반올림
console.log(Math.ceil(5.23451)); // 올림
console.log(Math.floor(5.23451)); // 내림
console.log(Math.random()); // 0 <= x < 1 범위의 난수

console.log(Math.floor(Math.random() * 10));

//1~100
console.log(Math.round(Math.random() * 100));

//20~22
console.log(Math.floor(Math.random() * 3) + 20);
