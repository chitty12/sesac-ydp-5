import { useState } from 'react';

const CounterFunction = (props) => {
  const [number, setNumber] = useState(0);
  const onClickEnter = () => setNumber(number + 1);
  const Decrease = () => setNumber(number - 2);
  const { value } = props;
  console.log(props);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClickEnter}>{value}</button>

      <button onClick={Decrease}>감소</button>
    </div>
  );
};

export default CounterFunction;
