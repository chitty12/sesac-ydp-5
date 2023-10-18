import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function App_ex(store) {
  console.log(store.store);
  const [input, setInput] = useState('');

  const number = useSelector((state) => state.balance.number);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>코딩온 은행</h1>
      <h2>잔액: {number}원</h2>
      <input
        type="number"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      ></input>
      <button
        onClick={() => dispatch({ type: 'DEPOSIT', data: Number(input) })}
      >
        입금
      </button>
      <button
        onClick={() => dispatch({ type: 'WITHDRAW', data: Number(input) })}
      >
        출금
      </button>
    </div>
  );
}

export default App_ex;
