import React, { useState } from 'react';

const Result = (props) => {
  console.log(props.result);
  const { fruits, bgColor, txtColor, text } = props.result;

  const src = `../public/${fruits}.png`;
  console.log(src);

  return (
    <div>
      <img src={src} width="100px" heigh="100px" alt="과일"></img>
      <p style={{ background: bgColor, color: txtColor, display: 'block' }}>
        {text}
      </p>
    </div>
  );
};

export default Result;
