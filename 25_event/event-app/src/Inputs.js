import React, { useState } from 'react';

const Inputs = ({ select }) => {
  const [inputs, setInputs] = useState({
    fruits: 'apple',
    bgColor: 'white',
    txtColor: 'black',
    text: '',
  });

  const fruitsChange = (e) => {
    setInputs({ ...inputs }, (inputs.fruits = e.target.value));
    select(inputs);
  };
  const bgColorChange = (e) => {
    setInputs({ ...inputs }, (inputs.bgColor = e.target.value));
    select(inputs);
  };
  const txtColorChange = (e) => {
    setInputs({ ...inputs }, (inputs.txtColor = e.target.value));
    select(inputs);
  };
  const txtChange = (e) => {
    setInputs({ ...inputs }, (inputs.text = e.target.value));
    select(inputs);
  };

  const style = { margin: '5px 5px' };

  return (
    <>
      <div>
        <label for="fruits">과일: </label>
        <select
          onChange={fruitsChange}
          name="fruits"
          id="fruits"
          defaultValue="apple"
          style={style}
        >
          <option value="apple">사과</option>
          <option value="peach">복숭아</option>
          <option value="banana">바나나</option>
          <option value="orange">오렌지</option>
        </select>
        <label for="bgColor">배경색: </label>
        <select
          onChange={bgColorChange}
          name="bgColor"
          id="bgColor"
          defaultValue="white"
          style={style}
        >
          <option value="white">흰색</option>
          <option value="black">검정색</option>
          <option value="yellow">노란색</option>
          <option value="red">빨간색</option>
          <option value="blue">파란색</option>
          <option value="green">초록색</option>
          <option value="purple">보라색</option>
        </select>
        <label for="txtColor">글자색: </label>
        <select
          onChange={txtColorChange}
          name="txtColor"
          id="txtColor"
          defaultValue="black"
          style={style}
        >
          <option value="black">검정색</option>
          <option value="white">흰색</option>
          <option value="yellow">노란색</option>
          <option value="red">빨간색</option>
          <option value="blue">파란색</option>
        </select>
      </div>
      <div>
        <label for="text">내용: </label>
        <input type="text" name="text" id="text" onChange={txtChange}></input>
      </div>
    </>
  );
};

export default Inputs;
