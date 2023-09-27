import { useState } from 'react';

const Result = (Fruits, BackgroundColor, Color) => {
  const { src, setSrc } = useState('../public/logo512.png');
  const { BackgroundColor, setBgColor } = useState({
    BackgroundColor: 'white',
  });

  src = (Fruits) => {};

  return;
  <div style={BackgroundColor}>
    <img src={src}></img>
  </div>;
};
