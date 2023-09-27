// import logo from './logo.svg';
import Counter from './Counter';
import './App.css';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';
import Example from './Example';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <SayFunction />
      <hr />
      <CounterFunction value={'Plus 1'} value2={'Minus 2'} />
      <hr />
      <Example />
      <hr />
    </div>
  );
}

export default App;
