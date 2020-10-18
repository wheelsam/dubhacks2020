import React from 'react';
import { Route } from "react-router-dom";
import TaskPage from './TaskPage.js';
import App from '../app/App.js';

export default function Routes(props) {

  return (
    <div>
      <Route path={`/TaskPage`} component={TaskPage}/>
    </div>
  );
}
