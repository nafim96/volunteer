import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,


  Link, Route, Switch
} from "react-router-dom";
import AddEvent from './components/AddEvent/AddEvent';
import Event from './components/Event/Event';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/event">event</Link>
          </li>
          <li>
            <Link to="/addEvent">Add Event</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/event">
            <Event></Event>
          </Route>
          <Route path="/addEvent">
            <AddEvent></AddEvent>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
