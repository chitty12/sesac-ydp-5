import React from 'react';
import useToggle from '../hook/useToggle';

export default function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle();
  return (
    <div>
      <h1>custom hook(useToggle) ex</h1>
      <div onClick={setIsFaqOpen} style={{ cursor: 'pointer' }}>
        리액트에서 커스텀 훅 만들 수 있음?
      </div>
      {isFaqOpen && <div>네 그럼유</div>}
    </div>
  );
}
