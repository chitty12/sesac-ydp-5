import React, { useState, useRef } from 'react';

export default function Todo() {
  const [inputs, setInput] = useState('');
  const [todo, setTodo] = useState([]);

  const inputRef = useRef();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const register = () => {
    if (inputs.trim().length === 0 || inputs === '') {
      setInput('');
      return inputRef.current.focus();
    }

    const newTodo = { id: todo.length + 1, todo: inputs, checked: 'false' };
    {
      todo.length < 10
        ? setTodo([...todo, newTodo])
        : alert('할일이 너무 많아요!');
    }
    setInput('');
  };

  const enterInput = (e) => {
    if (e.keyCode === 13) {
      register();
    }
  };

  const checkList = (e, idx) => {
    const isChecked = e.target.checked;
    const findOne = todo.find((element) => element.id == idx);
    findOne.checked = `${isChecked}`;
  };

  const deleteTodo = () => {
    const newTodo = todo.filter((element) => element.checked === 'false');
    setTodo(newTodo);
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        value={inputs}
        onChange={onChange}
        onKeyDown={enterInput}
        ref={inputRef}
      ></input>
      <button onClick={register}>등록</button>
      <ul>
        {todo.map((value) => {
          return (
            <li key={value.id}>
              <input
                type="checkbox"
                style={{ marginRight: '10px' }}
                onChange={(e) => checkList(e, value.id)}
                value={value.todo}
              />
              <span>{value.todo}</span>
            </li>
          );
        })}
      </ul>

      <button onClick={deleteTodo}>완료된 할 일 삭제</button>
    </div>
  );
}
