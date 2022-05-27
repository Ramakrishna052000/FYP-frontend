import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";
import Yoga from './Components/Yoga';
import Exercise from './Components/Exercise';
import About from './Components/About';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact="true" path="/">
            <Home/>
          </Route>
          <Route exact="true" path="/yoga">
            <Yoga/>
          </Route>
          <Route exact="true" path="/exercise">
            <Exercise/>
          </Route>
          <Route exact="true" path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
