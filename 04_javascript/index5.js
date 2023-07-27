// 함수 : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합.
// 내장 함수 : 언어에서 자주 쓰는 기능을 만들어 놓은 함수 (alert, confirm, prompt)
// 사용자 정의 함수

// 입력 -> 함수 -> return -> 출력
// * 동일한 작업을 반복
// 1. 반복 작업 줄임
// 2. 코드 재사용성 높임
// 3. 유지보수 편리

// - 함수 정의 : 함수를 "생성"한다
// - 함수 호출 : 함수를 "사용"한다

// 1. 명시적 함수 선언
function helloWorld() {
  // return 키워드 생략 가능
  console.log('Hello, World');
}

helloWorld(); // 함수 호출

function helloWorld2() {
  return 'Hello, World2';
}
// return(반환값) : 함수 내부 (body, block) 코드의 "최종 결과값"
// 최종 결과값을 저장하고 보관하기 위한 키워드
// return 키워드를 만나면 함수 실행 중단 (return 다음에 코드 작성하더라도 의미 없음.)
console.log(helloWorld2());

// 2. 함수 표현식 (Function Expression) : 함수를 변수에 저장하는 형태
const helloWorld3 = function () {
  console.log('Hello, World3');
};

const helloWorld4 = function () {
  return 'Hello, World4';
};

helloWorld3();
console.log(helloWorld4());
helloWorld3();
helloWorld3();
helloWorld3();
helloWorld3();

// 함수는 "여러 번" 호출 가능하다!!!

// 매개변수가 있는 함수
function hello1(text) {
  return text;
}
console.log(hello1('안녕!!!'));
const apple = '사과는 맛있따';
console.log(hello1(apple));
const myNumber = 8;
console.log(hello1(myNumber));

function hello2(text, name) {
  // return text + '' + name;
  return `${text} ${name}`;
}
console.log(hello2('하이헬로', 'John'));
console.log(hello2('잘가~!', '쫀'));

function hello3(text, name) {
  console.log(`${text} ${name}`);
}
hello3('반갑당', '애두라');

// 3. 화살표 함수 (arrow function) : 함수 선언 문법이 간결함!!
const myFunc1 = (x) => x;
/* function myFunc1(x) {
    return x;
} 
*/
const mySum = (a, b) => a + b;
console.log(mySum(5, 2));

// body({}) 내에 return 만 있을 때 생략가능한 것이고, 코드가 길어진다면 return 명시해야함.
const myMulti = (a, b) => {
  let result = a * b;
  return result;
};
console.log(myMulti(3, 4));

// 호이스팅(hoisting) : "끌어올리다" : 코드가 실행되기 전 함수 선언을 최상단으로 끌어올리는 것.
// 함수에서는 "함수 선언문"이 호이스팅 대상이 됨.
// "변수"에서는 "var"가 호이스팅의 대상이 됨. (let, const 호이스팅 x)
myHello(); // 함수의 "호출"을 "정의"보다 먼저 함.
function myHello() {
  console.log('hello~~~');
}

// 다만, 함수 표현식으로는 호이스팅의 대상이 될 수 없음. 따라서, 함수 선언부보다 호출부가 먼저 나올 수 없음.
//myHello2(); // ReferenceError
myHello2 = function () {
  console.log('hello~~~~2');
};

// 실습1
let a = prompt('숫자1');
let b = prompt('숫자2');
Number(a);
Number(b);

function multiply(a, b) {
  return a * b;
}

console.log(multiply(a, b));

// 실습2

let c = prompt('숫자3');
Number(c);

function square(c) {
  console.log(c ** 2);
}

square(c);
