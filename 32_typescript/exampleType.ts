////////////////////////////////////////////
type Category = '액션' | '롤플레잉' | '판타지';
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: Category;
  platform: string;
}

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};
let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
};

////////////////////////////////////////////////

function sum1(a: number, b: number): void {
  console.log(a + b);
}

sum1(5, 11);

function sum2(...arr: number[]): number {
  let total = 0;
  for (let value of arr) {
    total += value;
  }
  return total;
}

console.log(sum2(1, 2, 3, 4, 10));

////////////////////////////////////////////

// Q. arrA와 arrB는 같은 결과가 출력된다. 차이가 무엇인지 생각 댓글로 달아보기!
let arrA: any[] = [1, true, 'string']; // 배열 요소로 어떤 타입도 가능
let arrB = [1, true, 'string']; // 타입을 명시하지 않아서 처음 초기화된 값으로 타입 추론 -> number, boolean, string 타입을 갖는 배열

// Q.  enum 데이터 Cafe와 Auth에 대해서 console 데이터를 찍고 있다. 각각 출력되는 값과 에러가 발생한다면 왜 에러가 발생하는지 이유 찾아보기
// 열거형 (숫자형, 문자형)
enum Auth2 {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe2 {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth2[1]); // 출력 가능: user -> 값이 1인 요소의 이름 가져옴
//   console.log(Cafe2[1]); // 출력 불가능 -> 문자 열거형 인덱스로 가져올 수 없음
console.log(Cafe2['americano']); // 출력 가능: 아메리카노

// Q. const vs. readonly
// const: 변수 재할당 방지. 배열, 객체 같은 참조형 데이터의 경우, 참조값을 저장
// readonly: 클래스 멤버 변수 or 인터페이스 속성 변경하지 못하도록 함 (런타임때 값이 변경되지 않음을 보장)
// *런타임: 응용프로그램이 동작되는 동안

// Q. 아래 코드에서 에러가 발생하지 않고 동작하는 이유
// arrQ 배열은 원소 타입이 number, boolean, string이 가능한 것을 의미하는 거지, 배열 원소 순서가 number -> boolean, string 이어야 하는 것은 아님
let arrQ: (number | boolean | string)[] = [1, true, 'string'];
arrQ[0] = 'string'; // 에러가 발생하지 않고 동작하는 이유
console.log('arrQ >>>> ', arrQ);
