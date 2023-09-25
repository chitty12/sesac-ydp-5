import logo from './logo.svg';
import './Larva.css';
import './App.css';

function App() {
  const name = '뽀삐';
  const student = 'sesac';
  const animal = '강아지';
  const a = 2;
  const b = 3;

  const title = 'react를 배워보자';
  const styles = {
    backgroundColor: 'tomato',
    color: 'blue',
    fontSize: '50px',
  };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // JSX 문법
    // 하나로 감싸인 요소

    <>
      {/* js 문법 사용
       - {}로 감싸면 js 표현식 사용 가능
       - {} 안에서 삼항 연산자 사용 가능 (if, for 문 사용 불가) */}
      <div> {name} 안녕? </div>
      <div>
        {student === 'sesac' ? <span>새싹인</span> : <span>새싹이 뭐지</span>}
      </div>

      {/* 3. style 속성
        - 리액트에서 dom 요소에 스타일 적용시 문자열 x => 객체 사용
        - 스타일 이름 중 하이픈 포함시 camelCase 로 작성해야 함. */}
      <div style={styles}>스타일 적용</div>
      <div
        style={{
          backgroundColor: 'tomato',
          color: 'blue',
          fontSize: '50px',
        }}
      >
        스타일 적용2
      </div>

      {/* 4. className 사용
        - class 속성이 아닌 className 속성 사용 (ex. <div className="app">)
        
          5. 종료 태그가 없는 태그 사용
        - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함. or self-closing 
        - <input /> or <input></input>
         
         */}

      <h2>제 반려 동물의 이름은 {name}</h2>
      <h2>
        {name} 은 {animal} 입니다.
      </h2>

      <div>
        {3 + 5 == 8 ? <span>정답입니다!</span> : <span>오답입니다!</span>}
      </div>
      <div>
        {a > b ? (
          <span>a가 b 보다 큽니다</span>
        ) : (
          <span>a가 b보다 작습니다!</span>
        )}
      </div>

      <div className="test">{title}</div>
      <div className="inputs">
        <label for="id">아이디 : </label>
        <input className="input" id="id"></input>
        <br></br>
        <label for="pw">비밀번호 : </label>
        <input className="input" id="pw"></input>
      </div>

      <div className="colors">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="purple"></div>
      </div>

      <div className="larva head">
        <div className="larva eye1">
          <div className="larva eye2"></div>
        </div>
      </div>
      <div className="larva allbody">
        <div className="larva b1"></div>
        <div className="larva b2"></div>
        <div className="larva b3"></div>
        <div className="larva b4"></div>
      </div>
    </>
  );
}

export default App;
