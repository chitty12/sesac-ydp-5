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

console.clear();

// 클래스 : 객체 생성 템플릿

//
/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/

class House {
  // 생성자 함수 : 클래스를 이용해 객체를 생성할 때마다 속성을 초기화 시킴
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  //   매서드 1 : 집 나이
  getAge() {
    console.log(`${this.name}는 건축한지 ${2023 - this.year}년 되었어요!`);
  }

  // 매서드 2 :  창문 개수
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
  }
}

// 클래스를 이용해 객체를 찍어보자
const house1 = new House('1990', '롯데캐슬', '1');
console.log('house1>>', house1);
console.log(typeof house1); // object
console.log(house1.year);

house1.getAge();
house1.getWindow();

const house2 = new House('2007', '자이', '10');
house2.getAge();
house2.getWindow();

// 클래스 상속(부모 : House, 자식 : Apartment)
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    super(year, name, window);
    // 부모객체에서 상속받아옴 = 상속한 부모 클래스의 생성자를 불러옴.
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}`;
  }

  // 오버라이딩 (overriding) : 부모 클래스에 정의되어 있는 메서드 이름을 동일하게 쓰면서 내용은 다르게 할때
  getWindow() {
    return `${this.name} 아파트의 ${this.window} 개의 창문은 ${this.windowMaker} 회사에서 생산되었습니다.`;
  }
}

const apt1 = new Apartment(2022, '래미안', 3, 20, 'KCC');
console.log(apt1);
console.log(apt1.getAptInfo());

console.clear();

class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getArea() {
    console.log(
      `가로 ${this.x}, 세로 ${this.y}의 길이를 가진 직사각형 넓이는 ${
        this.x * this.y
      } 입니다`
    );
  }
}

class Rectangle extends Shape {
  constructor(x, y) {
    super(x, y);
  }

  getArea() {
    const xy = this.x * this.y;
    return `가로 ${this.x}, 세로 ${
      this.y
    }의 길이를 가진 직사각형의 대각선의 길이는 ${Math.sqrt(xy)} 입니다.`;
  }
}

class Triangle extends Shape {
  constructor(x, y) {
    super(x, y);
  }

  getArea() {
    return `밑변 ${this.x}, 높이 ${
      this.y
    }의 길이를 가진 삼각형의 대각선의 길이는 ${(this.x * this.y) / 2} 입니다.`;
  }
}

class Circle extends Shape {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }

  getArea() {
    return ` 반지름이 ${this.z}인 원의 넓이는 ${
      this.z * this.z * 3.14
    } 입니다.`;
  }
}

// x, y를 이용해서 반지름구하여 원넓이 연산.

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

const cross = new Rectangle(2, 3);
console.log(cross);
console.log(cross.getArea());

const tri = new Triangle(2, 3);
console.log(tri);
console.log(tri.getArea());

const won = new Circle(2, 2, 2);
console.log(won);
console.log(won.getArea());

/////////////////////////////////////////////
// 단축 평가
// &&, ||
// A || B : 두 개의 피연산자 중에서 하나만 true 여도 t 반환
// A && B : 두 개의 피연산자 모두 true일 경우 t 반환

console.log(true && true);
console.log(false && true); // false
console.log(true || false); // true

const xx = 4;
const yy = 5;
// 삼항 연산자 예시
const result1 = xx > yy ? 'a' : 'b';
console.log(result1); //b

// 단축 평가
const result2 = xx > yy && 'a';
console.log(result2); // false

const result3 = xx || 100;
console.log(result3);

const nameEx = '홍길동';
const nameEx2 = null;
console.log(nameEx || '이름없음'); //홍길동
console.log(nameEx2 || '이름없음'); //이름없음
