// front js

// tbody 요소, button-group 요소를 선택
const tbody = document.querySelector('tbody'); // $('tbody')
const buttonGroup = document.querySelector('#button-group'); // $('#button-group')

// 폼의 [등록] 버튼 클릭시 테이블에 방문데이터 추가 : 버튼 클릭시 axios로 POST/ visitor 요청 날려서 db에 데이터 insert
function createVisitor() {
  const form = document.forms['visitor-form'];

  axios({
    method: 'post',
    url: '/visitor',
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    const { id, name, comment } = res.data;

    // newVisitor 변수에 tr 요소를 생성하고, tbody 의 맨마지막 요소로 추가
    const newVisitor = `<tr id="tr_${id}">
    <td>${id}</td>
    <td>${name}</td>
    <td>${comment}</td>
    <td>
      <button type="button">수정</button>
    </td>
    <td>
      <button type="button" onclick="deleteVisitor(this, ${id})">삭제</button>
    </td>
  </tr>`;

    //   ${'tbody'}.append(newVisitor)
    tbody.insertAdjacentHTML('beforeend', newVisitor);
  });
}

function deleteVisitor(obj, id) {
  console.log(obj, id);

  // confirm은 boolean형태로 반환된다. confirm창에서 '취소'를 누르면 아무일도 일어나지 않음.
  if (!confirm('정말 삭제할꺼에요?')) {
    return;
  }

  //   '확인'을 누르면 visitor 데이터 삭제됨.
  axios({
    method: 'delete',
    url: '/visitor',
    data: {
      id: id,
    },
  }).then((res) => {
    console.log('delete/visitor 요청에 대한 응답', res.data);
    alert('삭제성공!');

    obj.parentElement.parentElement.remove();
  });
}
