import React, { useRef, useState } from 'react';

export default function RefSample2() {
  const id = useRef(7);

  const [number, setNumber] = useState(10);

  console.log(id);
  const plusIdRef = () => {
    id.current += 1;
    console.log(id.current);
    // 리렌더링 되지 않기 때문에 상태변화가 일어나지 않는다.
  };

  const plusNumState = () => setNumber(number + 1);

  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭시 id값을 1씩 증가</p>

      <h2>{id.current}</h2>
      <button onClick={plusIdRef}>Focus</button>

      <p>비교. state 변경시 ref 와 다르게 리렌더링 확인</p>
      <h2>{number}</h2>
      <button onClick={plusNumState}>Focus</button>
    </div>
  );
}
