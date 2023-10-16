import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form_ex() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const isValid = (data) => {
    console.log('isdata', data);
  };
  console.log('ERR', errors);

  return (
    <div>
      <h1>react-hook-form 실습</h1>
      <form onSubmit={handleSubmit(isValid)}>
        <input
          type="text"
          placeholder="name"
          {...register('name', { required: '이름은 필수항목입니다.' })}
        />
        {/* {errors.name?.message} */}
        {errors.name && errors.name.message}
        <input
          type="number"
          placeholder="age"
          {...register('age', {
            required: '나이는 필수항목입니다.',
            validate: {
              isNumber: (v) => Number(v) >= 0 || '0이상의 숫자만 입력하세요',
            },
          })}
        />
        {errors.age?.message}
        <button type="submit">button</button>
      </form>
    </div>
  );
}
