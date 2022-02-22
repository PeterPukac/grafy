import  './App.css';
import Main from './Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function App() {
  return (
    <div className="App">
        <Main/>
    </div>
  );
}
export default App;
