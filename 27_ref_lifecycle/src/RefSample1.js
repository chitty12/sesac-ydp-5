import React, { useRef } from 'react';

export default function RefSample1() {
  // 1. ref 객체 만들기
  const inputRef = useRef();
  // 3. useRef()를 이용해서 만든 객체의 current 값에 focus() dom API 사용
  const handleFocus = () => {
    console.log(inputRef.current);

    // focus() : 지정된 html 요소에 포커싱
    inputRef.current.focus();
  };

  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭시 input에 focusing 처리해보기</p>
      {/* 2. 직접 접근하고 싶은 dom 요소에 ref props설정 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
