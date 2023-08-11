// 구조 분해 할당
// 1. 배열 구조 분해 할당
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [이게, 무슨] = arr2;
console.log('a', 무슨);

// 갯수를 초과한 값을 지정하면, 해당 값은 undefined.

let num1 = 1;
let num2 = 3;
console.log('before swap', num1, num2);
[num2, num1] = [num1, num2];
console.log('after swap', num1, num2);

const lists = ['apple', 'grape'];
[f1, f2, f3] = lists;
console.log(f1, f2, f3);

[f1, f2, f3 = 'orange'] = lists;
// f3 값 할당하면서 가능
console.log(f1, f2, f3);

// 2. 객체 구조 분해 할당
//  - 변수 선언의 순서는 중요하지 않으나, 키 값과 변수명이 일치해야 한다.
const obj = {
  title: '엘리멘탈',
  content: '재밌어요',
  num: 5,
};
console.log(obj.title, obj.content, obj.num);
console.log(obj['title'], obj['content'], obj['num']);

// 객체 구조 분해 사용한 경우
// const { num, title, content } = obj;
// console.log(title, content, num);

const { n1, t1, c1 } = obj;
console.log(n1, t1, c1); // undefined : obj내에 해당 변수와 일치값이 없으므로.

const { title: t2, num: n2, content: c2 } = obj; // 각 키 값과 변수를 할당하면서 지정할 경우 출력 가능.
console.log(t2, c2, n2);

// key 가 존재하지 않을 때 = 연산자 사용하여 default 값 할당
const { num, title, content, star = 1000 } = obj;
console.log(title, num, content, star);

function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lectureInfo;

  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다`;

  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

// 전개구문 : 반복 가능한 객체에 대해 단일 요소로 압축을 해제하는 역할(==객체의 값을 펼쳐준다.)
// spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];

console.log(spread);

// spread in string
const c = [...'HELLO']; // [ 'H', 'E', 'L', 'L', 'O' ]
const d = 'HELLO'.split(''); // [ 'H', 'E', 'L', 'L', 'O' ]
console.log(c);
console.log(d);

// spread in object : 객체를 펼치게되므로, 반복을 피할 수 있다.
const chip = {
  base: 'chip',
  Company: 'lotte',
};

const potatoChip = {
  base: 'chip',
  company: 'lotte',
  flavor: 'potato',
};

const sweetpotatoChip = {
  ...chip,
  // base: 'chip',
  // company: 'lotte',
  flavor: 'sweet potato',
};

console.log(chip, potatoChip, sweetpotatoChip);

const word1 = 'abc';
const word2 = 'xyz';

const spread2 = [...word1, ...word2];
console.log(spread2);

// spread의 rest 파라미터 : 나머지 전부(마지막에 위치 해야한다.)

// 1. 함수에서 rest(...) 사용
const values = [10, 20, 30, 40, 50, 60];
function get(a, b, ...rest) {
  console.log('a >>', a);
  console.log('b >>', b);
  console.log('rest >>', rest);
}

get(...values); // 배열 형태로 출력 [ 3, 4, 5, 6, 7, 8 ]

// 2. 객체에서 rest 사용
const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor);
console.log(rest); // { company: 'lotte', price: 1000 } 객체형식으로 출력된다.

// 3. 배열에서 rest 사용
const numb = [1, 2, 3, 4, 5, 6, 7, 8];
const [원, 투, ...나머지] = numb;
console.log(원);
console.log(투);
console.log(나머지);
