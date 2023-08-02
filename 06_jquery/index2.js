// val() -value
function getValue() {
  // js ver.
  // const inputVal = document.querySelector('input').value;
  // alert(inputVal);

  // jquery ver.
  const value = $('input').val();
  alert(value);
}
function setValue() {
  // js ver.
  // document.querySelector('input').value = '해위해위~';
  // jquery ver.
  $('input').val('안롱~');
}

// css()
function changeCssJS() {
  const span = document.querySelector('span');
  span.style = 'font-size: 20px; color: red';
}
// querySelector는 만나는 가장 첫번째 span에 대하여만 적용되게 된다. 따라서 반복문도 필요.
// 반면에, jquery는 ................................

function changeCssJquery() {
  //   $('span').css('font-size', '40px');
  //   $('span').css('color', 'blue');
  // 하나씩 일일이... 한번에 변경하려는 스타일이 많은 경우라면?
  $('span').css({
    fontSize: '40px',
    color: 'blue',
  });
}

// 속성값 가져오기
function getCssJquery() {
  console.log(document.querySelector('span').style.color);
  // jquery ver.
  // console.log($('span').css('color'));
}

// attr()
function changeAttrJS() {
  const google = document.getElementsByTagName('a');
  google[0].setAttribute('href', 'https://www.naver.com/');
}

function changeAttrJquery() {
  $('a').attr('href', 'https://www.daum.net');
}

// text()
function changeTextJS() {
  // 퀴즈: p-text 클래스를 갖는 요소 선택하고, 요소의 텍스트를 임의의 값으로 변경
  const p_text = document.getElementsByClassName('p-text');
  p_text[0].innerText = '임의의 값!!!';
}

function changeTextJquery() {
  $('.p-text').text('jquery로 텍스트 변경~');
}

// html()
function changeHtmlJS() {
  // 퀴즈: p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
  const phtml = document.querySelector('.p-html');
  phtml.innerHTML = '<h3>javascript</h3>';
}

function changeHtmlJquery() {
  $('.p-html').html('<h3>jquery</h3>');
}

// 요소 추가하기
// append()
function appendJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append

  const cols = document.getElementsByClassName('colors');
  const li = document.createElement('li');
  li.innerText = '마지막 자식으로 추가된 js';
  cols[0].append(li);
}

function appendJquery() {
  $('.colors').append('<li>마추 jquery</li>');
}

// prepend()
function prependJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend

  const cols = document.querySelector('.colors');
  const li = document.createElement('li');
  li.innerText = '첫 자식으로 추가된 js';
  cols.prepend(li);
}

function prependJquery() {
  $('.colors').prepend('<li>첫 추 jquery</li>');
}

// before()
// previousElementSibling 과 혼동하지 말것
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before

  const gr = document.querySelector('.green');
  const li = document.createElement('li');
  li.innerText = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
  gr.before(li);
}

function beforeJquery() {
  $('.green').before('<li>그클갖요이형추 jquery</li>');
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after

  const gr = document.querySelector('.green');
  const li = document.createElement('li');
  li.innerText = '바로 다음 형제 요소';
  gr.after(li);
}

function afterJquery() {
  $('.green').after('<li>바다형요 jquery</li>');
}

function removeJS() {
  const li2 = document.querySelector('#li2');
  li2.remove();
}

function removeJquery() {
  $('#li2').remove();
}

function emptyJS() {
  const emp = document.querySelector('.nums');
  //   emp.innerHTML = '';
  emp.style.display = 'none';
}

function emptyJquery() {
  $('.nums').empty();
}

function findParent() {
  const parent = document.querySelector('.child2');
  console.log(parent.parentNode);
}
function findParents() {}

function findNext() {
  const next = document.querySelector('.child2');
  console.log(next.nextElementSibling);
}
function findPrev() {
  const prev = document.querySelector('.child2');
  console.log(prev.previousElementSibling);
}
function findChildren() {
  const chil = document.querySelector('.parent');
  console.log(chil.children);
}
