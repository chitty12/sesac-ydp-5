const div1 = document.getElementById('div1');
console.log(div1);

// 태그 내부 내용 변경하기
// innerHTML, innerText, textContent
// innerHTML : 태그를 사용 가능
// innerText, textContent : 태그를 넣더라도 문자 그대로 출력됨.
div1.innerHTML = '여기는 <b>첫번째</b> 태그!';
console.log(div1);
div1.innerText = '여기는 <b>첫번째</b> 태그!';
console.log(div1);
div1.innerContent = '여기는 <b>첫번째</b> 태그!';
console.log(div1);

// 속성(attribute) 변경
const naver = document.getElementById('naver');
naver.setAttribute('href', 'https://chitty12.tistory.com/');
const pooh = document.getElementById('pooh');
pooh.setAttribute('src', '../img/zzang.jpeg');

// 속성을 가져오기: getAttribute(속성명)
console.log(document.getElementById('pooh').getAttribute('src'));

// cf) 속성 접근을 '.' 연산자로도 가능함
console.log(document.getElementById('pooh').id); // pooh.id
console.log(document.getElementById('naver').href); //naver.id

// cf) 연산자로 속성에 접근한 후, 할당 연산자로 속성 값 변경 가능
document.getElementById('naver').href = '#';

// CSS 지정
const h1 = document.querySelector('h1');
const list = document.querySelectorAll('ul > li'); // 유사 배열

// style 속성을 이용하되, style.XXX(XXX ; camelCase)
// list[0].style.backgroundColor = 'purple';
// list[0].style.fontSize = '20px';
// list[0].style.color = 'yellow';
for (let li of list) {
  li.style.backgroundColor = 'purple';
  li.style.fontSize = '20px';
  li.style.color = 'yellow';
}

// CSS 지정 2. classList 활용
// xxx.classList.add
// xxx.classList.remove
// xxx.classList.contains : 있는지 없는지 확인 (t/f)... 보통 조건문이랑 함께 활용 (있으면~, 아니면~)
// xxx.classList.toggle : 있으면 제거, 없으면 추가

// h1.classList.add('add-h1');
// h1.classList.remove('add-h1');
// h1.classList.contains('add-h1');

if (h1.classList.contains('add-h1')) {
  h1.innerText = '하하하 add-h1 클래스가 있어';
} else h1.innerText = '하하하 add-h1 클래스가 없어ㅠㅠ';

h1.classList.toggle('add-h1');

// 요소 찾기
// 계층 구조(형제, 자식, 부모, 조상, 자손)
const friends = document.querySelector('#friends');
const tigger = document.querySelector('#tigger');

// 1. 자식 요소
console.log(friends.children); // 유사 배열. 자식 모두를 선택
console.log(friends.children[0]); // 인덱싱 가능

// 2. 부모 요소
console.log(tigger.parentNode);
console.log(tigger.parentNode.parentNode);

// 3. 형제 요소
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling);
console.log(tigger.nextElementSibling.nextElementSibling);

// 요소를 생성, 추가, 삭제
const container = document.querySelector('.container');

const make = document.createElement('p'); // 요소 <p></p> 생성
console.log(make);

make.innerText = '새로 추가된 p요소입니다.';
make.style.fontWeight = 700;
make.style.backgroundColor = 'red';

// 생성한 요소를 추가해야한다.
// x.append(y) : x요소의 맨 마지막 자식으로 y 요소가 추가
// x.appendChild(y)
container.append(make);

// 여러개 추가도 가능!
const make2 = document.createElement('p');
const make3 = document.createElement('p');
make2.innerHTML = 'make2';
make3.innerHTML = 'make3';
make2.classList.add('make-2');
make3.classList.add('make-3');

container.append(make2, make3);

// x.prepend(y): x요소의 맨 처음 자식으로 y 요소가 추가
const li1 = document.createElement('li');
li1.textContent = '캉가';
friends.prepend(li1);
const li0 = document.createElement('li');
li0.innerHTML = '<b>친구들을 소개합니다</b>';
friends.prepend(li0);

// 요소 삭제
// x.remove() : x요소 삭제
// x.removeChild(y) : x의 자식요소인 y가 삭제
const firstLi = document.querySelector('li');
console.log(firstLi); // 친구들을 소개합니다 li 태그

// firstLi.remove();

const ul = firstLi.parentNode; // ul 태그
ul.removeChild(firstLi);
