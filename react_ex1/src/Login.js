import React, { useState, useRef } from 'react';

export default function Login(props) {
  const [input, setInput] = useState({
    id: '',
    password: '',
  });
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: '',
  });
  const isHidden = useRef();

  const { id, password } = input;
  const onChange = (e) => {
    const { value, name } = e.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  // 1. id 불일치, id, pw 불일치: 회원정보가 없습니다.
  // 2. pw 불일치 : 비밀번호 오류!
  // 3. 로그인 성공! : 메세지 띄우기 style hidden

  const msg = {
    text1: '회원정보가 없습니다',
    
    text2: '비밀번호 오류!',
    text3: '로그인 성공!',
  };
  const { userId, userPassword } = props.userInfo;

  const isLogin = () => {
    loginInfo.id = id;
    loginInfo.password = password;

    console.log(loginInfo);
    console.log(isHidden.current.style);
    const divStyle = isHidden.current.style;

    if (userId === id) {
      {
        userPassword === password
          ? (divStyle.visibility = 'hidden')
          : (divStyle.visibility = 'visible');
      }
    } else {
        return 
    }
  };

  return (
    <>
      <div ref={isHidden}>
        <label htmlFor="id" style={{ display: 'block' }}>
          ID :
          <input
            type="text"
            onChange={onChange}
            value={id}
            name="id"
            style={{ marginLeft: '5px' }}
          />
        </label>
        <label htmlFor="password" style={{ display: 'block' }}>
          PW :
          <input
            type="password"
            onChange={onChange}
            value={password}
            name="password"
            style={{ marginLeft: '5px' }}
          />
        </label>
      </div>
      { ? (
        <h2>{msg.text3}</h2>
      ) : (
        <div>{msg.text1}</div>
      )}
      <button onClick={isLogin} ref={isHidden}>
        Login
      </button>
    </>
  );
}
