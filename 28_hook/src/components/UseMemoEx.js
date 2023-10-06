import React, { useState, useMemo } from 'react';

// useMemo
// - 메모리제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산을 최소화함.

export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // 임의의 큰 연산을 하는 함수
  // 버튼을 누를 때 실행되는데, input을 입력할 때도 연산(calc())이 이루어지는 문제
  // useMemo 렌더링 과정에서 특정값을 기억해서 바뀔 때만 연산되도록 최적화
  //   const calc = () => {
  //     console.log('열심히 계산중...');
  //     for (let i = 0; i < 100000000; i++) {}
  //     return count ** 2;
  //   };

  // [useMemo]
  // count 값이 바뀔 때에만 함수를 실행해주세요!! 라는 의미
  // input 상태가 바뀌면 컴포넌트는 리렌더링 되지만, calc는 연산되지 않음.
  const calc = useMemo(() => {
    console.log('열심히 계산중...');
    for (let i = 0; i < 100000000; i++) {}

    return count ** 2;
  }, [count]);

  return (
    <div>
      <h1>UseMemo Ex</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={() => setCount(() => count + 1)}>Plus</button>
      <p>count: {count}</p>
      {/* before */}
      {/* <p>calc: {calc()}</p> */}

      {/* after */}
      <p>calc: {calc}</p>
    </div>
  );
}
