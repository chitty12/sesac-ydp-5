console.log(document);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.URL);

// document 객체를 이용해 HTML 요소 선택
// 1. getElementById
console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

// 2. getElementsByClassName
console.log(document.getElementsByClassName('pink')); // '유사'배열형태로 출력됨.
console.log(document.getElementsByClassName('pink'[1]));

// 3. getElementsByTagName
console.log(document.getElementsByTagName('div'));

// 4. getElementsByName
console.log(document.getElementsByName('id'));

// 5. querySelector(css selector) : 처음 발견한 하나만 가져옴

console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]'));

// 6. querySelectorAll (css selector) : 선택자에 해당되는 모든 요소를 선택
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.pink')[0]);
console.log(document.querySelector('.pink')[1]);
console.log(document.querySelector('.pink')[2]);
console.log(document.querySelector('.pink')[3]);

console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]'));

// 유사 배열 (콘솔창 상에서 "HTML Collection", "NodeList")
// []식으로 출력되어 배열처럼 나열한 것. 배열은 아니다. 다만, index, length는 가짐.
// 따라서, 사용가능한 메서드가 제한됨.

// NodeList -> forEach() 반복문 사용이 가능함.
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

// HTMLCollection -> forEach() 메서드 사용불가. (error)
// 반복이 필요할 경우라면, Array 로 변경필요! (Array.from())
Array.from(document.getElementsByClassName('pink')).forEach((elem) =>
  console.log(elem)
);

// for of 반복문도 가능함
const pinks = document.querySelectorAll('.pink');
for (let pink of pinks) {
  console.log(pink);
}
