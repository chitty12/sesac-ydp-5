import Login from './Login';
import Todo from './Todo';

function App() {
  const userInfo = { id: 'banana', password: 1234 };

  return (
    <div className="App">
      <Todo />
      <hr></hr>
      <h1>Login</h1>
      <Login userInfo={userInfo} />
    </div>
  );
}

export default App;
