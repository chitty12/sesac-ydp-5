// jQuery
// $(선택자).동작함수 ()
// $() : HTML 요소를 선택하는 함수
// 동작함수 : 선택된 요소에 대해 원하는 동작 수행

function submitJs() {
  const div1 = document.getElementById('div1');

  // div 내용을 변경
  div1.innerText = '반갑습니다!';

  // div border style 추가
  div1.setAttribute('style', 'border: 2px solid red;');
}

function submitJquery() {
  const div1 = $('#div1');
  $('#div1').text('안녕히계세요~');
  $('#div1').css('border', '2px dotted blue');
}

const colorsJs = document.querySelectorAll('.color');
const colorsJquery = $('.color');

console.log(colorsJs); // nodelist
console.log(colorsJquery); // jquery 객체
// 유사 배열의 형태로 출력됨.

// js li 요소 클릭시 글씨 색상 빨간색
colorsJs[0].addEventListener('click', function () {
  colorsJs[0].style.color = 'red';
});

// Error: 유사 배열에 이벤트리스너를 추가했기때문에.
// 각 요소에 대해 이벤트리스너를 추가해야 하므로 반복문 필요함!!!
colorsJs.forEach((item) => {
  item.addEventListener('click', () => {
    item.style.color = 'red';
    // = this.style.color = 'red'
  });
});

// jquery li 요소 클릭시 배경 색상 하늘색
colorsJquery.on('click', function () {
  console.log($(this));
  $(this).css('background-color', 'skyblue');
  // js와 달리 css의 속성처럼 작성
  // js와 달리 반복문 필요없음
});
