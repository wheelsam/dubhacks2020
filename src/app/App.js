import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TaskPageHandler from "./pages/TaskPage.js";
import HomePage from "./pages/HomePage.js";
import AddPage from "../components/AddPage";

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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
