console.log('connected!');

// 변수 선언 : 변수를 정의하는 것.
// 변수 할당 : 연산자를 이용해 값을 넣음.
// 초기화 : 변수가 처음 할당되는 순간을 말함.

// ### var
// - 선언 단계와 초기화 할당 단계가 동시에 진행이 되며, 초기화에는 undefined 값이 들어간다.
// - 중복 선언이 가능하며, 예기치 못한 값을 반환할 수 있음
// - 선언 이전에 참조하면 언제나 undefined를 반환한다.

// ### const
// - 재선언이 불가능하고, 재할당이 불가능하다.
// - 초반에 선언을 할 때 반드시 **초기화**를 동시에 진행해야 한다.

// ### let
// - let 키워드로는 변수 중복 선언이 불가능하지만, 재할당이 가능하다.

// 변수 선언 키워드 1. var
var a;
console.log(a); //undefined : 값을 할당하지 않았음.
a = 2;
console.log(a); // 변수 값 출력 (2)

var a2 = 4;
console.log(a2);

// var 변수의 오류
// 변수를 선언하기전에 값을 할당할 수 있다. -> 유지보수할 때 최악
aa = 123;
console.log(aa);

// var aa = 12;
// console.log(aa);

// let aa = 12;
// console.log(aa);

// 변수 선언 키워드 2. let
let b;
console.log(b); //undefined : 값을 할당하지 않았으므로
b = 7;
console.log(b); //변수 값 출력(7)

let b2 = 77;
b2 = 78; //변수 값을 재할당함.
// let b2 = 78; 는 에러에 해당함. let 중복 선언 불가능.

// 변수 선언 키워드 3. const
// -> 변수 선언과 할당을 동시에 해야만 한다.
// 변하지 않는 값을 변수에 저장할 때 사용함.
// const c = 3;
// console.log(c);
// c = 33;
// console.log(c);

// 변수 이름 규칙
// 식별자 : 이름을 붙일 때 사용하는 단어 (변수명, 함수명, 클래스명...등)
//  - 키워드 사용 불가능
//      - 키워드란? 특별한 역할을 이미 하고 있는 단어
//      - ex) let, var, const, void, return, for, while, class, if...
//  - 숫자 시작불가함.
//  - 특수문자 : _, $ 만 허용됨.
//  - 공백 문자 불가함.
// (관례) 식별자에 단어 두개 이상 작성하고 싶은 경우엔?
// camelCase ex) redApple, isWater...
// snake_case ex) red_apple, is_ water

// data types : 데이터(변수)의 종류
//  - Primitive(원시 타입) : string, number, boolean, undefined, null, ...
//  - Object(객체 타입) : Primitive 타입이 아닌 나머지

// 1. string
// : 텍스트 정보, 따옴표('') 감싸야 함
// : 숫자, 특수문자도 따옴표 안에 있으면 string에 해당.

let text = '안녕하세요!';
let text2 = '하이!';
let gender = '남자';
console.log(text);
console.log(text2);
console.log(text + text2);
console.log(text, text2, 'zz');
// 템플릿 리터럴 백틱(`)과 달러($), 중괄호({}) 조합으로 사용
// : 문자열 내에서 변수와, 상수를 간결히 표현
console.log(`${text} 저는 태영입니다. 저의 성별은 ${gender}입니다`);
// console.log(text + '저는 태영입니다. 저의 성별은' + gender + '입니다')

// 2. number
// (+, -, /, *)
let num = 100;
let num2 = 0.12;

console.log(num, num2);
console.log(num + 1);
console.log(num * 1);
console.log(num - 1);
console.log(num / 1);

// 3. boolean (true, false)
let isWater = true;
let hasApple = false;
console.log(isWater, hasApple);

// 4. null : 값이 없음을 의도적으로 명시하는 것.
let temp = null;
console.log(temp);
temp = 'HEllo~';
console.log(temp);

// 5. undefined : 값도 없고, 타입도 지정되지 않은 상태.
// 변수 선어난 했을 때 초기 값으로 undefined 할당됨.

// [QUIZ] 변수
// Q1. 코드 실행시 q1 변수는 어떤 값이 될까?
let q1 = 3;
q1 - 2;

// Q2. 다음 코드 실행시 q2 변수는 어떤 값이 될까?
let q2 = 10;
q2 = q2 + 5;
q2 = q2 - 2;

// Q3. 다음 코드 실행시 q3 변수는 어떤 값이 될까?
const q3 = 1;
// q3 = q3 + 1;

// 6. array : 배열
// 배열의 이름 : fruits
// 배열의 원소 (아이템) : 배열 안에 있는 데이터 하나하나
// 배열의 길이 (크기) : 원소의 개수와 동일
const fruits = ['orange', 'pineapple', 'grape', 'apple'];
console.log(fruits);
console.log(fruits[0]);

// js에서는 배열 원소의 자료형이 달라도 된다!!
const data = [1, 'allie', false, null, undefined];
console.log(data);

// array 중첩가능 -> 2차원 배열, 3차원 배열...
const korean = [['가', '나', '다'], [('라', '마', '바')], [('사', '아', '자')]];
console.log(korean);
console.log(korean[0]); //['가', '나', '다'] 출력됨.
console.log(korean[0][2]); // '다' 출력됨.

const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(nums[1][0][1]);

// 7. object (key : value)
const cat = {
  name: '나비',
  age: 1,
  isCute: true,
  mew: function () {
    return '냐옹';
  },
};
console.log(cat); //object 자체를 출력한것.

// object의 속성(key)에 접근하는 방법
// (1)
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew());
// (2)
console.log(cat['name']);
// key가 변수에 저장되어있을때 주로 사용한다.
const temVal = 'name';
console.log(cat[temVal]);

// typeof : 자료형 확인
// typeof x = typeof (x)
console.log(typeof '문자');
console.log(typeof 2972);
console.log(typeof true);
console.log(typeof null); //object... js 공식적으로 인정한 언어 자체의 오류에 해당.
console.log(typeof undefined);
console.log(typeof fruits);
console.log(typeof cat);

let isME = {
  name: '태영',
  gender: 'Male',
  MBTI: 'ESTJ',
};

console.log(isME);

// 형변환

// 1. String() : 문자로 형변환
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof str3);
console.log(String(str1), typeof String(str1));
console.log(String(str2), typeof String(str2));
console.log(String(str3), typeof String(str3));
console.log(str1.toString(), typeof str1.toString());

// 2. Number() : 숫자로 형변환
let n1 = true;
let n2 = false;
let n3 = '123.9';

console.log(Number(n1), typeof Number(n1));
console.log(Number(n2), typeof Number(n2));
console.log(Number(n3), typeof Number(n3));
console.log(parseInt(n3, 10)); // 10진수의 정수로 변환한다.
console.log(parseFloat(n3)); // 실수(Float)의 형식으로 변환한다.

// 성적 평균 구하는 프로그램 만들기
// let mathScore = prompt('수학점수를 입력');
// console.log(mathScore, typeof mathScore);
// let engScore = prompt('영어점수를 입력');
// console.log(engScore, typeof engScore);

// console.log(Number(mathScore));
// console.log(Number(engScore));

// let avgScore = (Number(mathScore) + Number(engScore)) / 2;
// console.log(`수학과 영어의 평균 점수는 ${avgScore} 입니다`);

console.log(Number(null), typeof Number(null));
console.log(Number(undefined), typeof Number(undefined));
