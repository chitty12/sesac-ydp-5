import logo from './logo.svg';
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import HandlerEx from './ex/Handler_ex';
import Example from './Example';
import Inputs from './Inputs';
import Result from './Result';
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    fruits: 'apple',
    bgColor: 'white',
    txtColor: 'black',
    text: '',
  });

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
      <hr></hr>
      <Inputs select={setInputs} />
      <Result result={inputs} />
    </div>
  );
}

export default App;
