import React from 'react';

// interface StudentInfo {
//   name: string;
//   grade: number;
// }

type StudentInfo = {
  name: string;
  grade: number;
  part?: String;
  handleClick: (name: string, grade: number) => void;
};

// FC: functional component
// React.FC 를 사용할 때는 generic 을 이용하여 props 타입을 표현.
// const Student: React.FC<StudentInfo> = ({ name, grade }: StudentInfo) => {
//   return (
//     <div>
//       <li>이름 : {name}</li>
//       <li>학년 : {grade}</li>
//     </div>
//   );
// };

const Student = ({ name, grade, part, handleClick }: StudentInfo) => {
  return (
    <div
      onClick={() => {
        handleClick(name, grade);
      }}
    >
      <li>이름 : {name}</li>
      <li>학년 : {grade}</li>
      <li>전공 : {part || '자유전공'}</li>
    </div>
  );
};

export default Student;
