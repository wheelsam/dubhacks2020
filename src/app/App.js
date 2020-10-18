import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TaskPageHandler from "./pages/TaskPageHandler.js";
import HomePage from "./pages/HomePage.js";
import NotFound from "./pages/NotFound.js";
import AddPage from "./pages/AddPage";
import ProfilePage from "../components/ProfilePage";
import './App.css'

// App.js
class App extends Component {

  constructor (props) {
    super(props);
    this.state = ({
      user: ""
    });
  }

  setUser = (newUser) => {
    this.setState({
      user: newUser
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"
                 render={() => ( <HomePage user={this.state.user} /> )}
          />
          <Route exact path="/add" component={AddPage} />
          <Route exact path="/profile" render={(routerProps) => ( <ProfilePage setUser={this.setUser} routerProps={routerProps}/> )}
          />
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
