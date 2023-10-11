import CssModuleComponents from './CssModuleComponents';
import MoveCircle from './MoveCircle';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import Worm from './Worm';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>
      <h2>Css Module</h2>
      <CssModuleComponents />

      <h2>Sass</h2>
      <SassComponent />
      <h2>Styled-component</h2>
      <StyledComponent />

      <hr></hr>
      <Worm />
      <hr></hr>

      <MoveCircle />
    </div>
  );
}

export default App;
