import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import TaskPage from './components/TaskPage.js';
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Route exact={true} path="/" component={App} />
    <Route
      path={`/:id`}
      render={(props) => (
        <TaskPage data="de" id={1} />
      )}
    />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
