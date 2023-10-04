import React, { useState } from 'react';

export default function Map_ex() {
  const [info, setInfo] = useState([
    {
      id: '',
      name: '',
      title: '',
    },
  ]);

  const writerInfo = () => {};

  return (
    <>
      <div>
        <label for="name">작성자 : </label>
        <input
          type="text"
          name="name"
          placeholder="작성자"
          id="name"
          onChange={writerInfo}
        ></input>
        <label for="title">제목 : </label>
        <input
          type="text"
          name="title"
          placeholder="제목"
          id="title"
          onChange={writerInfo}
        ></input>
        <button>작성</button>
      </div>

      <table border="1">
        <tr>
          <th>번호</th>
        </tr>
        <tr>
          <th>제목</th>
        </tr>
        <tr>
          <th>작성자</th>
        </tr>
      </table>
    </>
  );
}
