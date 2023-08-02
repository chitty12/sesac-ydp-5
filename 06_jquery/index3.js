console.log($(document));

// 1. Load Event
// js ver.
document.addEventListener('DOMContentLoaded', function () {
  // 문서의 dom 트리가 완성되면 실행되는 이벤트
});

// jquery ver.
$(document).ready(function () {
  console.log('ready - 문서의 dom 트리가 완성되면 실행되는 이벤트');
});

$(function () {
  console.log('안녕?');
});

// 2. Mouse Event
// $('.p-msg').click(function () {
//   // = on('click')
//   $('.p-msg').css('color', 'red');
// });

// $('.num').click(function () {
//   // $('.num').css('color', 'blue');
//   $(this).css('color', 'blue');
//   // $(this) : 자기자신 = 이벤트가 적용된 그 요소만!!
//   // 위의 코드는 리스트 전부가 파란색으로 바뀌는 것과 차이가 있음.
// });

// $('.num').on('click', function () {
//   $(this).css('color', 'blue');
// });

// js ver.
const nums = document.querySelectorAll('.num');
for (let num of nums) {
  num.addEventListener('click', function () {
    console.log(this); // 자기 자신 = 현재 클릭된 그 요소
    this.style.color = 'blue';
  });
}

// mouseover() : 요소에 마우스를 올렸을 때
$('.numbers').on('mouseover', function () {
  // = .mouseover()
  $(this).css('background-color', 'skyblue');
  //   $(this).append('<div>handler for .on() called</div>');
});

// hover() : 마우스 올리고 뗏을 때
// $('.div-hover').hover(
//   function () {
//     $(this).addClass('hover');
//   },
//   function () {
//     $(this).removeClass('hover');
//   }
// );

$('.div-hover').hover(function () {
  $(this).toggleClass('hover');
});

// scroll()
// jquery ver.
// $(window).scroll(function () {
//   console.log('scrolling!!');
// });

$(window).on('scroll', function () {
  console.log('scrolling!!');
});

// js ver.
window.addEventListener('scroll', function () {
  console.log('scrolling with js!!!');
});

// 3. key event
$('.input-key').on('keydown', function (e) {
  // e: 이벤트 객체
  console.log(e);
  console.log(e.code); //눌린 키의 고유 코드 출력
  console.log(e.key); // input에 입력된 값 출력
  if (e.code === 'ArrowUp') {
    console.log('👩🏻');
  } else console.log('👨🏻');
});

// 4. Form Event
$('#todo-form').on('submit', function (e) {
  console.log(e);
  e.preventDefault();

  // form에서는 submit을 누를 경우 기본동작인 새로고침이 되어 버리므로 이러한 동작을 막는것이 필요하다.
  // 이벤트(기본동작)를 막는것이지 새로고침을 막는것이 아니다!!!!!!

  // 1. name 속성값이 todo인 요소를 선택하고 해당 요소의 value를 todo 변수에 저장
  // 2. todos 클래스를 갖는 요소를 선택
  //    -> li 요소에 todo 변수의 값을 텍스트로 갖게 한 후 todos 클래스 요소에 추가
  // 3. name 속성값이 todo인 요소의 value 초기화
  const todo = $('[name = "todo"]').val();

  $('.todos').append(`<li>${todo}</li>`);

  $('[name = "todo"]').val('');
});

// e.preventDefault()
$('a#inactive').on('click', function (e) {
  e.preventDefault(); // a태그의 기본동작을 막음. 클릭이벤트의 기본동작이란 href 링크로의 이동에 해당함.
  $('#text').append('이 링크는 동작하지 않는다.');
});

// this : "그 함수가 속해 있던 객체를 참조한다"
//  - 뭔가를 클릭할 때 불러오는 함수(콜백함수) 에서 this는 '뭔가'를 의미
const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');

for (let btn of btns) {
  btn.addEventListener('click', function () {
    console.log(this);
    this.style.backgroundColor = 'royalblue';
  });
}

for (let span of spans) {
  span.addEventListener('click', function () {
    console.log(this);
    this.style.backgroundColor = 'royalblue';
  });
}

// 반복 피하기
// function setBgColor() {
//   this.style.backgroundColor = 'royalblue';
// }
// for (let btn of btns) {
//   btn.addEventListener('click', setBgColor);
// }
// for (let span of spans) {
//   span.addEventListener('click', setBgColor);
// }

// 매개 변수가 있는 경우에 사용법.
function setBgColor2(elem, color) {
  elem.style.backgroundColor = color;
}

for (let btn of btns) {
  btn.addEventListener('click', function () {
    setBgColor2(this, 'purple');
  });
}

for (let span of spans) {
  span.addEventListener('click', function () {
    setBgColor2(this, 'yellow');
  });
}
