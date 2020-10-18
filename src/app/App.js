import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";

// App.js
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
