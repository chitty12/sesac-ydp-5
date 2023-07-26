// 연산자
// 대입연산자 (=) : 변수에 값을 '할당'할 때 사용.
// 산술연산자 : +, -, *, /, %(나머지), **(거듭제곱)

// 비교 연산자 : 동등비교 (같음 : ==, === //같지 않음 : !=, !==)
// == (!=) : '값'만 비교
// === (!==) : '값'과 'type' 모두 비교하므로 둘다 비교하는 것이 더 바람직함(오류가능성이 적음)

console.log(1 != 2); // 같지 않으니까 true!!!!!
console.log('1' == 1); // 값이 같으니까 true

console.log('1' === 1); // '값'이 같아도, type이 달라 false
console.log('1' !== 1); // '값'이 같지만, type이 달라 true!!!!!!!!!!!

console.log('0' == false); // true
console.log('' == 0); // true
console.log(null == undefined); //true

// 논리 연산자
// ! : not (참 -> 거짓, 거짓 -> 참)
// && : and (여러 값 모두가 참 -> 참)
// || : or (여러 값 중 하나라도 참 -> 참)

console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!(2 > 1)); // !true -> false
console.log(2 > 1 && -2 < 1); // true && true -> true
console.log((2 > 1 && -2 < 1) || 5 > 2);
// (true && true) || true -> true || true -> true

// 문자열에서 + 연산: 문자열 더하기
console.log('안녕' + '하세요');
console.log('12' + '34');
// 더하기 이외의 연산은 숫자로 자동 형변환 되어 계산이 됨!
console.log('5' - '2');
console.log('5' * '2');
console.log('5' / '2');

// 증감 연산자 (++ : 변수 값을 1 증가시킴, -- : 변수 값을 1 감소시킴)
let result1, result2;
let num = 10,
  num2 = 10;

result1 = num++; // 후위 연산자 (postfix operator) : 변수를 먼저 대입한 뒤에 +1(-1) 연산을 수행함.
console.log(result1); // 10
console.log(num); //11

result2 = ++num2; // 전위 연산자 (prefix operator) : +1 (-1) 연산을 먼저 수행하고 변수에 대입.
console.log(result2); // 11
console.log(num2); // 11

// +=, -= 연산자를 더 자주 씀
console.log((num += 1));
console.log((num2 -= 1));
