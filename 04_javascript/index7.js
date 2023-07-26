// 반복문
// for 문
for (let i = 0; i < 10; i++) {
  console.log('안녕', i);
  // i가 0 ~ 9 총 10번 반복
}

// i += 2 // i = i + 2
for (let i = 0; i < 10; i += 2) {
  console.log('안녕', i);
  // i가 0 ~ 9 총 10번 반복
}

// 1~5 출력
for (let i = 1; i <= 5; i++) {
  console.log('안녕', i);
  // i가 0 ~ 9 총 10번 반복
}

// 5~1 출력
for (let i = 5; i >= 1; i--) {
  console.log('안녕', i);
  // i가 0 ~ 9 총 10번 반복
}

// 1부터 n까지의 합 구하기
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i; // sum += i
  console.log(i, sum);
}

console.log(sum);

// 배열, for 문
const fruits = ['사과', '배', '포도', '망고'];
console.log(fruits.length); // 배열의 원소개수 (크기/길이)를 출력

for (let f = 0; f < fruits.length; f++) {
  console.log(fruits[f]);
}

// 1~20 중에서 짝수일 때의 합 구하기
let sum2 = 0; // 합을 의미하는 변수 설정
// - 1~20까지 숫자 반복
// - 현재 반복 숫자가 짝수라면, sum2에 더하기
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum2 = sum2 + i;
    console.log(i, sum2);
  }
}

// while 문
// let idx = 0;
// while (idx < 10) {
//   console.log('안녕', idx);
//   idx = idx + 1; // idx += 1
// }

let idx2 = 0;
while (true) {
  // 무한루프, 브라우저 닫고 다시 실행해야한다.
  console.log('안녕', idx);
  idx2 = idx2 + 1; // idx += 1

  // 빠져나오는 조건 설정.
  if (idx2 === 10) {
    break;
  }
}

// continue를 이용해 0~99 중 홀수의 합
let sum3 = 0;

for (let i = 1; i <= 99; i++) {}
