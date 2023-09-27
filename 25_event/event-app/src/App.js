import logo from './logo.svg';
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import HandlerEx from './ex/Handler_ex';
import Example from './Example';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr></hr>
      <ClassBind />
      <hr></hr>
      <Counter />
      <hr></hr>
      <HandlerEx />
      <hr></hr>
      <Example />
    </div>
  );
}

export default App;
