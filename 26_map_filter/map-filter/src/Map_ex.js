import React, { useState } from 'react';

export default function Map_ex() {
  const [input, setInput] = useState([
    {
      writer: '',
      title: '',
    },
  ]);

  const [info, setInfo] = useState([]);

  const { writer, title } = input;

  const writerInfo = (e) => {
    console.log(info);
    const { value, name } = e.target;

    console.log(name);
    setInput({
      ...input,
      [name]: value,
    });
  };

  const addInfo = () => {
    console.log(writer);
    const newInfo = { writer, title };
    console.log(info);
    setInfo([...info, newInfo]);
    setInput({ ...input, writer: '', title: '' });
  };

  return (
    <>
      <div>
        <fieldset>
          <label htmlFor="writer">작성자 : </label>
          <input
            type="text"
            name="writer"
            placeholder="작성자"
            id="writer"
            onChange={writerInfo}
            value={writer || ''}
          ></input>
          <label htmlFor="title">제목 : </label>
          <input
            type="text"
            name="title"
            placeholder="제목"
            id="title"
            value={title || ''}
            onChange={writerInfo}
          ></input>
          <button onClick={addInfo}>작성</button>
        </fieldset>
      </div>

      <select>
        <option value="id">번호</option>
        <option value="user">작성자</option>
        <option value="title">제목</option>
      </select>
      <input type="text" placeholder="검색어" />
      <button>검색</button>

      <table border="1" style={{ width: '500px' }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {info.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
