import React, { useState } from 'react';

export default function Event_ex() {
  const [Inputs, setInputs] = useState([
    {
      id: 1,
      name: '코디',
      email: 'codi@gmail.com',
    },
    {
      id: 2,
      name: '윤소희',
      email: 'yoonsohee@gmail.com',
    },
  ]);

  //   const [inputName, setInputName] = useState('');
  //   const [inputEmail, setInputEmail] = useState('');

  const [info, setInfo] = useState([
    {
      name: '',
      email: '',
    },
  ]);
  console.log(info);

  const handleInput = (e) => {
    const { value, name } = e.target;
    console.log(e.currentTarget.value);

    setInfo(() => {
      return { name: e.currentTarget.value, email: e.currentTarget.value };
    });
  };

  const onChange = () => {
    const addInput = Inputs.concat({
      id: Inputs.length + 1,
      name: info.name,
      email: info.email,
    });

    console.log(Inputs);
    setInputs(addInput);
  };

  const enterInput = (e) => {
    if (
      e.keyCode === 13 &&
      info.name.trim().length !== 0 &&
      info.email.trim().length !== 0
    ) {
      onChange();
    }
  };

  const deleteInput = (id) => {
    const newInput = Inputs.filter((input) => input.id !== id);
    setInputs(newInput);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={handleInput}
        name="name"
      ></input>
      <input
        type="email"
        placeholder="이메일"
        onChange={handleInput}
        name="email"
        onKeyDown={enterInput}
      ></input>
      <button onClick={onChange}>등록</button>
      {Inputs.map((value) => {
        return (
          <li key={value.id} onDoubleClick={() => deleteInput(value.id)}>
            {value.name}: {value.email}
          </li>
        );
      })}
    </div>
  );
}
