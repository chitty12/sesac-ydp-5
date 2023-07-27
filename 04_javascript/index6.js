// 조건문
// if문
// if (5 > 3) {
//   console.log('얍!');
// }

// let number = Number(prompt('숫자를 입력해주세요!'));

// if (number > 10) {
//   console.log('입력한 수는 10보다 크네요');
// } else {
//   console.log('입력한 수는 10보다 작거나 같네요');
// }

// if (number > 10) {
//   console.log('입력한 수는 10보다 크네요');
// } else if (number === 10) {
//   console.log('입력한 수는 10!');
// } else {
//   console.log('입력한 수는 10보다 작네요');
// }

// if (number > 100 || number < 0) {
//   console.log('입력값이 잘못되었습니다. 숫자의 범위는 0 ~ 100');
// } else if (number >= 90) {
//   console.log('A');
// } else if (number >= 80) {
//   console.log('B');
// } else if (number >= 70) {
//   console.log('C');
// } else if (number >= 60) {
//   console.log('D');
// } else if (number >= 50) {
//   console.log('F');
// }

// 실습
// let age = Number(prompt('나이를 입력'));

// if (age >= 20) {
//   console.log('성인');
// } else if (age >= 17) {
//   console.log('고등학생');
// } else if (age >= 14) {
//   console.log('중학생');
// } else if (age >= 8) {
//   console.log('초등학생');
// } else if (age >= 0) {
//   console.log('유아');
// } else {
//   console.log('제대로 입력하세요');
// }

// 중첩 if문
// let userId = 'user01';
// let userPw = '1234';

// id, pw 검사하는 함수
// function loginUser() {
//   let inputId = prompt('아이디를 입력');
//   let inputPw = prompt('비밀번호 입력');
//   // userId와 inputId 가 같다면, userPw와 userPw를 비교함
//   // 빈값이 입력된 경우, '아이디 입력되지 않음'
//   // 모두 아닌경우? (inputId가 틀렸을 경우), '아이디가 틀림'

//   if (userId === inputId) {
//     if (userPw === inputPw) {
//       return '로그인 성공';
//     } else {
//       return '비번오류! 로그인 실패';
//     }
//   } else if (inputId === '') {
//     return '아이디 입력하지 않음';
//   } else {
//     return '아이디 오류! 로그인 실패';
//   }
// }

// const result = loginUser();
// // loginUser 함수의 리턴값 (반환값)을 result변수에 저장.
// console.log(result);

// switch 문
//  - 하나 이상의 case 문으로 구성되며, default는 필수는 아니지만, 쓰는 것이 바람직.
//  - 여러개의 case 문을 묶을 수도 있다.
// break : 해당 case에 해당하여 조건문 switch를 빠져나갈때 사용하는 키워드
// let a = 4;
// switch (a) {
//   case 1:
//   case 2:
//   case 3:
//     console.log('a가 3이군요');
//     break;
//   case 4:
//     console.log('a가 4이군요');
//     break;
//   case 5:
//     console.log('a가 5이군요');
//     break;
//   default:
//     console.log('a가 무슨 값인지 모르겠습니다');
//     break;
// }

// let score = Number(prompt('점수입력'));

// switch (parseInt(score / 10)) {
//   case 10:
//   case 9:
//     console.log('A');
//     break;
//   case 8:
//     console.log('B');
//     break;
//   case 7:
//     console.log('C');
//     break;
//   case 6:
//     console.log('D');
//     break;
//   default:
//     console.log('F');
//     break;
// }

// 삼항 연산자
let num = 5;
if (num % 2 === 1) {
  console.log('홀수');
} else {
  console.log('짝수');
}

num % 2 === 1 ? console.log('홀수') : console.log('짝수');

// 실습
let now = new Date().getHours();
now <= 12 ? console.log('오전') : console.log('오후');
