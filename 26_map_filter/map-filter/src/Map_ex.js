import React, { useState, useRef } from 'react';

export default function Map_ex() {
  const [input, setInput] = useState([
    {
      writer: '',
      title: '',
      search: '',
    },
  ]);
  const [info, setInfo] = useState([]);
  const [surf, setSurf] = useState();
  const refName = useRef();
  const refTitle = useRef();

  const { writer, title, search } = input;

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
    console.log(typeof writer);
    if (writer === undefined) {
      return refName.current.focus();
    } else if (writer.trim().length === 0) {
      return refName.current.focus();
    }

    if (title === undefined) {
      return refTitle.current.focus();
    } else if (title.trim().length === 0) {
      return refTitle.current.focus();
    }

    console.log(writer);
    const newInfo = { writer, title };
    console.log(info);
    setInfo([...info, newInfo]);
    setInput({ ...input, writer: '', title: '' });
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addInfo();
    }
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
            ref={refName}
            onKeyDown={handleKeyDown}
          ></input>
          <label htmlFor="title">제목 : </label>
          <input
            type="text"
            name="title"
            placeholder="제목"
            id="title"
            value={title}
            onChange={writerInfo}
            ref={refTitle}
            onKeyDown={handleKeyDown}
          ></input>
          <button onClick={addInfo}>작성</button>
        </fieldset>
      </div>

      <select>
        <option value="id">번호</option>
        <option value="user">작성자</option>
        <option value="title">제목</option>
      </select>
      <input type="text" placeholder="검색어" value={surf} />
      <button onClick={setSurf}>검색</button>

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
