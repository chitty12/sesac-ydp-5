let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

let result = document.querySelector('[name = "result"]');

btn1.addEventListener('click', function () {
  let value1 = Number(document.querySelector('[name = "value1"]').value);
  let value2 = Number(document.querySelector('[name = "value2"]').value);
  let cal = document.querySelector('[name = "cal"]').value;
  if (cal === '+') {
    return (result.value = value1 + value2);
  } else if (cal === '-') {
    return (result.value = value1 - value2);
  } else if (cal === '*') {
    return (result.value = value1 * value2);
  } else if (cal === '/') {
    return (result.value = value1 / value2);
  } else {
    alert('+/-/x/% 중에 입력하세요');
  }
});

btn2.addEventListener('click', function () {
  let inputs = document.querySelectorAll('input');
  for (let input of inputs) {
    input.value = '';
  }
});

// document.querySelector('[name = "value1"]').value = '';
// document.querySelector('[name = "value2"]').value = '';
// document.querySelector('[name = "cal"]').value = '';
// result.value = '';
