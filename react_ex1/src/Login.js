import React, { useState, useReducer, useRef } from 'react';

function reducer(state, action) {
  console.log(state);
  switch (action.isLogin) {
    case 'idFalse':
      return { ...state, msg: '회원정보가 없습니다.' };
    case 'pwFalse':
      return { ...state, msg: '비밀번호 오류!' };
    case 'true':
      return { success: 'true', msg: '로그인 성공~!' };
    default:
      return { success: 'false', msg: '' };
  }
}
export default function Login(props) {
  const [input, setInput] = useState({
    id: '',
    password: '',
  });

  const [login, setLogin] = useReducer(reducer, {
    success: 'false',
    msg: '',
  });

  const { id, password } = input;
  const inputRef = useRef();
  const onChange = (e) => {
    const { value, name } = e.target;
    const newInput = { ...input, [name]: value };
    setInput(newInput);
  };

  const userId = props.userInfo.id;
  const userPassword = props.userInfo.password;

  const loginButton = () => {
    const isId = input.id;
    const isPw = input.password;
    console.log(typeof isPw);
    console.log(typeof userPassword);

    let loginInfo = {};
    if (userId === isId) {
      if (password.trim().length === 0 || input === '') {
        return inputRef.current.focus();
      }
      {
        userPassword.toString() === isPw
          ? (loginInfo = { isLogin: 'true' })
          : (loginInfo = { isLogin: 'pwFalse' });
      }

      if (userPassword.toString() !== isPw) {
        setInput({ ...input, password: '' });
      }
    } else {
      loginInfo = { isLogin: 'idFalse' };
      setInput({
        id: '',
        password: '',
      });
    }

    setLogin(loginInfo);
  };

  const enterLogin = (e) => {
    if (e.keyCode === 13) {
      loginButton();
    }
  };

  const logoutButton = () => {
    setLogin({ isLogin: 'false' });

    setInput({
      id: '',
      password: '',
    });
  };

  return (
    <>
      {login.success === 'true' ? (
        <div>
          <h2>
            {login.msg} 환영합니다 {userId} 님!
          </h2>
          <button onClick={logoutButton}>Logout</button>
        </div>
      ) : (
        <div>
          <div>
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
                onKeyDown={enterLogin}
                value={password}
                name="password"
                style={{ marginLeft: '5px' }}
                ref={inputRef}
              />
            </label>
          </div>
          <p>{login.msg}</p>
          <button onClick={loginButton}>Login</button>
        </div>
      )}
    </>
  );
}
