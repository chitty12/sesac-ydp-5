// promise : 비동기 함수를 동기처리하기 위해 만든 객체
// 실패 or 성공에 대한 결과값을 '약속'한다는 의미
// 성공, 실패를 분리해서 반환해준다. (then, catch 메서드로 이어 받아서 처리 가능.)

// 실행함수 executor [resolved : 성공 // rejected : 실패]

// 1. promise 생성 코드
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `현재 프로미스의 상태는 성공(fulfilled)! then 메서드로 연결합니다. 이 때 flag 값은 ${flag}!!`
      );
    } else {
      reject(
        `현재 프로미스의 상태는 실패(rejected)! catch 메서드로 연결합니다. 이 때 flag 값은 ${flag}!!`
      );
    }
  });
}

// 2. promise 사용 코드
promise1(true)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

///////////////////////////////////////////

function goMart() {
  console.log('마트에 가서 어떤 음료를 살지 고민한다.');
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('고민 끝!!');
      product = '제로콜라';
      price = '4000';
      //   resolve();

      if (price <= 2000) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

function nopay() {
  console.log('금액 부족 ㅠㅠ');
}

let product;
let price;
goMart();
pickDrink().then(pay).catch(nopay);

////////////////////////////////////////////////

// 3. 프로미스 체이닝(chaining)
// (4+3) * 2 -1 을 연산해보기

// 1) 콜백함수로 처리
// function add(n1, n2, callback) {
//   setTimeout(function () {
//     const result = n1 + n2;
//     callback(result);
//   }, 1000);
// }

// function mult(n, callback) {
//   setTimeout(function () {
//     const result = n * 2;
//     callback(result);
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(function () {
//     const result = n - 1;
//     callback(result);
//   }, 500);
// }

// add(4, 3, function (x) {
//   console.log('1: ', x);
//   mult(x, function (y) {
//     console.log('2: ', y);
//     sub(y, function (z) {
//       console.log('3: ', z);
//     });
//   });
// });

// 2) promise chaining
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mult(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n * 2;
      //   resolve(result);

      reject(new Error('의도적으로 발생시킨 에러~!'));
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n - 1;
      resolve(result);
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log('1: ', result);
    return mult(result);
  })
  .then(function (result) {
    console.log('2: ', result);
    return sub(result);
  })
  .then(function (result) {
    console.log('3: ', result);
  })
  .catch(function (error) {
    console.log(error);
  });
