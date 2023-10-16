import Faq from './components/Faq';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducer from './components/UseReducer';
import Form from './components/react-hook-form/Form';
import Form_ex from './components/react-hook-form/Form_ex';
import useTitle from './hook/useTitle';

function App() {
  useTitle('React Hooks 연습중입니당');

  return (
    <div className="App">
      <UseMemoEx />
      <hr></hr>
      <UseCallbackEx />
      <hr></hr>
      <UseCallbackEx2 postId={7} />
      <hr></hr>
      <UseReducer />
      <hr></hr>
      <Faq />
      <hr></hr>
      <Form />
      <hr></hr>
      <Form_ex />
    </div>
  );
}

export default App;
