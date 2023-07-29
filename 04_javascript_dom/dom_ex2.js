let btn = document.querySelector('.btn');
let num = 0;

const today = new Date();
const time = today.toLocaleString();

btn.addEventListener('click', function () {
  let tr = document.createElement('tr');
  document.querySelector('.table').append(tr);
  let tdNum = document.createElement('td');
  let tdWr = document.createElement('td');
  let tdCon = document.createElement('td');
  let tdDay = document.createElement('td');
  tr.append(tdNum, tdWr, tdCon, tdDay);

  let writer = document.querySelector('#writer');
  let blank = document.querySelector('#blank');

  tdWr.innerText = writer.value.trim();
  tdCon.innerText = blank.value.trim();

  tdNum.innerText = ++num;

  tdDay.innerHTML = time;
});
