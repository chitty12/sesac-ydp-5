import { useSelector, useDispatch } from 'react-redux';
import './styles/Box.css';

function App() {
  const number = useSelector((state) => state.counter.number);

  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <h2>number: {number}</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1 </h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2 </h2>
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3 </h2>
      <Box4 />
    </div>
  );
};

const Box4 = () => {
  const number = useSelector((state) => state.number);
  const isVisible = useSelector((state) => state.isVisible);
  const dispatch = useDispatch();

  // const [toggle, setToggle] = useState(isVisible);

  // const toggled = () => {
  //   setToggle((prev) => !prev);
  // };

  return (
    <div className="Box">
      <h2>Box4: {number} </h2>
      <h2>isVisible 값은: {isVisible ? '참' : '거짓'} 이다. </h2>
      <button onClick={() => dispatch({ type: 'PLUS' })}>Plus</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>minus</button>

      {/* 퀴즈. change 버튼 클릭하면 참/거짓 toggle 되도록 */}
      {/* <button onClick={() => dispatch({ type: 'CHANGE' })}>change</button> */}
    </div>
  );
};

export default App;
