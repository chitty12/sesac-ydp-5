import React, { useState, useEffect } from 'react';

export default function LifeCycleFuncChild({ number }) {
  const [input, setInput] = useState('');

  // Mount 시점에 실행된다.

  //   useEffect(() => {
  //     console.log('컴포넌트 마운트!!!');

  //     // unmount 시점에 실행
  //     return () => {
  //       console.log('컴포넌트 언마운트!!');
  //     };
  //   }, []);

  // Mount or Update 시점에 실행된다.
  //   useEffect(() => {
  //     console.log('컴포넌트 마운트 or 업데이트!!!');
  //   });

  // input 상태가 업데이트 될 때 실행!
  //   useEffect(() => {
  //     console.log('마운트 or input 상태가 업데이트됨에 따라 컴포넌트 업데이트');
  //   }, [input]);

  return (
    <div>
      자식 컴포넌트
      <div>현재 Number 값은 {number}입니다.</div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
    </div>
  );
}
