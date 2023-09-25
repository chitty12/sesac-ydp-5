import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Food from './Food';
import Book from './Book';
// import ConsoleButton from './ConsoleButton';

function App() {
  const valid_ex = () => {
    console.log('콘솔 메세지 출력');
  };

  return (
    <div className="App">
      <FunctionComponent name="새싹" />
      <FunctionComponent />

      <hr />
      <ClassComponent name="새싹" />
      <ClassComponent />

      <hr />
      <Button link="https://www.google.com">Google</Button>

      <hr />
      <Food></Food>

      <hr />
      <Book
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500"
        type="자기계발서"
      ></Book>

      <hr />
      {/* <ConsoleButton text="text props" valid={valid_ex}></ConsoleButton> */}
    </div>
  );
}

export default App;
