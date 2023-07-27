// 0~100 숫자 중 2 또는 5의 배수의 총합 구하기
// 2의 배수에 해당하거나 5의배수에 해당하면
// 반복하여 더한다

let sum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0 || i % 5 == 0) {
    sum += i;
  }
  console.log(i, sum);
}

console.log(sum);

// 10000 까지 숫자 중 13의 배수면서 홀수인 숫자 찾기
for (let i = 0; i <= 10000; i++) {
  if (i % 13 == 0 && i % 2 == 1) {
    console.log(i);
  }
}

// +prompt 사용하여 입력받은 수까지 13의 배수면서 홀수인 숫자 찾는 프로그램을 만들기
let num = Number(prompt('입력한 수까지 13의 배수이면서 홀수인 숫자는?'));
let result = [];

for (let i = 0; i <= num; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    result.push(i);
  }
}

console.log(result);

// 구구단 만들기

for (let i = 2; i <= 9; i++) {
  console.log(`---${i}단--- `);
  for (let n = 1; n <= 9; n++) {
    console.log(`${i} x ${n} = ${i * n}`);
  }
}
