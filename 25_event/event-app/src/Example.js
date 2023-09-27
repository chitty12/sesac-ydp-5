import { useState } from 'react';

const Example = () => {
  const [string, setString] = useState('검정색 글씨');
  const [color, setColor] = useState({ color: 'black' });
  const [visibility, setHidden] = useState({ visibility: 'visible' });
  const [str, setStr] = useState('안녕하세요');
  const redColor = () => {
    setString('빨간색 글씨');
    setColor({ color: 'red' });
  };
  const blueColor = () => {
    setString('파란색 글씨');
    setColor({ color: 'blue' });
  };

  const beHidden = () => {
    if (visibility.visibility === 'visible') {
      setHidden({ visibility: 'hidden' });
      setStr('나타나랏');
    } else {
      setHidden({ visibility: 'visible' });
      setStr('사라져랏');
    }
  };

  return (
    <div>
      <h1 style={color}>{string}</h1>
      <button onClick={redColor}>빨간색</button>
      <button onClick={blueColor}>파란색</button>

      <hr />
      <h1 style={visibility}>{str}</h1>
      <button onClick={beHidden}>{str}</button>
    </div>
  );
};

export default Example;
