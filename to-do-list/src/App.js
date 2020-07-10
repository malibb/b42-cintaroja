import React from 'react';
import Home from './views/Home';
import AddTask from './views/AddTask';
import Task from './views/Task';
import P404 from './views/P404';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/task/add">
          <AddTask></AddTask>
        </Route>
        <Route exact path="/task/:id/:gatito">
          <Task></Task>
        </Route>
        <Route path="*">
          <P404></P404>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
