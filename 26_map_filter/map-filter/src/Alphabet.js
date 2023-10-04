import React, { useState } from 'react';

export default function Alphabet() {
  //   const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);

  const [alphabet, setAlphabet] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);

  const [inputAlpha, setInputAlpha] = useState('');

  const addAlpha = () => {
    // input이 빈값이라면 alphabet 상태가 변경되지 않도록 하기
    if (inputAlpha !== '') {
      // 빈스페이스는 추가가 될 것!!
      // trim().length !== 0 이 더 알맞을수도...??
      const newAlpha = alphabet.concat({
        id: alphabet.length + 1,
        alpha: inputAlpha,
      });
      setAlphabet(newAlpha);
      setInputAlpha('');
    } else {
      alert('값을 입력해주세요');
    }
  };

  const deleteAlpha = (targetId) => {
    // targetId: 삭제될 요소의 id
    console.log(targetId);
    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
    setAlphabet(newAlpha);
  };

  const enterAlpha = (e) => {
    // bug fix: IME 문제 해결
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.keyCode === 13 && inputAlpha.trim().length !== 0) {
      addAlpha();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        // input에서 enter 키 누르면 추가되도록
        onKeyDown={enterAlpha}
      ></input>
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {/* {alphabet.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })} */}
        {alphabet.map((value) => {
          return (
            <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
              {value.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
