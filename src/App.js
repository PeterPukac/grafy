import './App.css';
import Main from './Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Main></Main>
      </div>
    </Router>
  );
}
export default App;
