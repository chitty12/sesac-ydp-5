// 구조분해 : 구조를 분해해서 할당(= 연산자) 하겠다
// 1. 객체({})를 구조분해
const cookie = {
  choco: '초코맛 쿠키',
  vanilla: '바닐라맛 쿠키',
  orange: '오렌지맛 쿠키',
};

console.log(cookie.choco);
console.log(cookie.vanilla);
console.log(cookie.orange);

// cookie. 반복하기가 너무 귀찮다! 구조분해하자

const { choco, vanilla, orange } = cookie;
console.log(choco);
console.log(vanilla);
console.log(orange);
// 객체로 묶어 내보낸 경우 이름이 동일해야한다.
// 다만, 하나씩 내보낸 모듈이라면 이름이 달라져도 불러올 수 있다.

// 2. 배열([])를 구조분해
