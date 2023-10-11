import React from 'react';
import './styles/SassComponent.scss';

export default function SassComponent() {
  return (
    <>
      <div className="container">
        <div className="box red"></div>
        <div className="box orange"></div>
        <div className="box yellow"></div>
      </div>
      <button className="btn">버튼</button>
      <button className="btn-primary">버튼 프라이머리</button>
    </>
  );
}
