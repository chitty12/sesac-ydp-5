import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register, // 각 input 에 할당, value 변경 감지.
    handleSubmit, // form submit 시 호출됨.
    formState: { errors }, // 폼 상태 객체.
    watch, // 특정 폼 필드의 값을 실시간으로 사용.
  } = useForm();

  // handleSubmit(funcA[, funcB]) : 두개의 함수를 받음
  // - funcA : 필수, 유효할 때 실행
  // - funcB : 선택, 유효하지 않을 때 실행
  const onValid = (data) => {
    console.log('onValid', data);
  };

  return (
    <div>
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="userName"
          {...register('userName', {
            required: '이름을 입력해주세요',
            minLength: { message: '이름은 최소 2글자 이상', value: 2 },
          })}
        ></input>
        {errors.userName?.message}
        <br></br>
        <input
          type="email"
          placeholder="email(gmail)"
          {...register('email', {
            required: '이메일을 입력해주세요',
            validate: {
              useGmail: (v) =>
                v.includes('gmail.com') || 'gmail로만 가입가능합니다.',
            },
          })}
        ></input>
        {errors.email?.message}
        <br></br>
        <input
          type="text"
          placeholder="password"
          {...register('password')}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

// js 최신 문법: optional chaining
// const user ={}
// const user2 = {name: 'sean'}
// console.log(user) {}
// console.log(user&&user.name) undefined
// console.log(user?.name) undefined
// console.log(user2?.name) sean
