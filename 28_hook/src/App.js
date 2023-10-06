import Faq from './components/Faq';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducer from './components/UseReducer';
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
    </div>
  );
}

export default App;
