const add = (a, b) => a + b;
const PI = 3.141592;
const E = 2.718;

const minus = (a, b) => a - b;
const mltp = (a, b) => a * b;
const dvd = (a, b) => a / b;

// case1. 객체로 감싸서 내보내기
// module.exports = {
//   add: add,
//   PI: PI,
//   E: E,
//   minus: minus,
//   mltp: mltp,
//   dvd: dvd,
// };
// obj에서, key와 value가 동일할 경우 생략가능!!
// add:
// PI:
// E:

// case2. 하나씩 내보내기
// module.exports.add = add;
// exports.add = add;

module.exports = add;
