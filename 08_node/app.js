// math 모듈을 불러오기

// const add = require('./math');

// console.log(add(5, 6));

var json_string =
  '{ "name": "짱구", "gender": "m", "age": 7, "family": { "dog": "흰둥이",  "sister": "짱아" }}';
var obj = JSON.parse(json_string);
console.log(obj); // { name: "짱구", gender: "m", age: 7, family: { dog: "흰둥이",  sister: "짱아" }}
