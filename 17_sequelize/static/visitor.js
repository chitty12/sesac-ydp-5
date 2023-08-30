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
      <button type="button" onclick="editVisitor(${id})">수정</button>
    </td>
    <td>
      <button type="button" onclick="deleteVisitor(this, ${id})">삭제</button>
    </td>
  </tr>`;

    //   ${'tbody'}.append(newVisitor)
    tbody.insertAdjacentHTML('afterbegin', newVisitor);
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

function editVisitor(id) {
  console.log(id, '번 방명록 수정');

  // 1. id를 가지고 방명록 하나를 조회(read one).
  axios({
    method: 'get',
    url: `/visitor/${id}`, //req.params에 정보가 담긴다.
    // url: '/visitor'
    params: {
      id: id,
    },
  }).then((res) => {
    console.log(res.data);
    const { name, comment } = res.data;
    const form = document.forms['visitor-form'];
    form.name.value = name;
    form.comment.value = comment;
  });

  // 2.[변경], [취소] 버튼 보이기

  const btns = `<button type="button" onclick="editDo(${id})">변경</button>
<button type="button" onclick="notEdit(${id})">취소</button>
`;

  buttonGroup.innerHTML = btns;
}

// [변경] 버튼 클릭시 실제 수정 요청해서 방명록 업데이트 수행
function editDo(id) {
  const form = document.forms['visitor-form'];
  axios({
    method: 'patch',
    url: '/visitor',
    data: {
      id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log(res.data);
    console.dir(form);
    const { isUpdated } = res.data;
    if (isUpdated) {
      alert('수정 완료!');
    }
    const tr = document.querySelector(`#tr_${id}`).children;

    tr[1].textContent = form.name.value;
    tr[2].textContent = form.comment.value;

    form.name.value = '';
    form.comment.value = '';

    // 수정 작업 이루어지고 나서, input 초기화 & [등록] 버튼 보이기
    notEdit();
  });
}

function notEdit() {
  //1. 빈칸(원래 내용)
  const form = document.forms['visitor-form'];
  form.name.value = '';
  form.comment.value = '';

  // 2. 버튼 원상복귀
  const createbtns = `<button type="button" onclick="createVisitor())">등록</button>`;
  buttonGroup.innerHTML = createbtns;
}
