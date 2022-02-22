import  './App.css';
import Topbar from './Topbar';
import Chart from './Chart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar></Topbar>
        <Chart></Chart>
      </Router>
    </div>
  );
}
export default App;
