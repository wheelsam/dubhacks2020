import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TaskPageHandler from "./pages/TaskPageHandler.js";
import HomePage from "./pages/HomePage.js";
import NotFound from "./pages/NotFound.js";
import AddPage from "../components/AddPage";
import './App.css'

// App.js
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/add" component={AddPage} />
          <Route
            path="/activity/:id"
            render={(routerProps) => (
              <TaskPageHandler routerProps={routerProps}/>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
