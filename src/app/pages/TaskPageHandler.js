import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link as RouterLink} from 'react-router-dom';
import TaskPage from './TaskPage.js';
import NotFound from './NotFound.js';

const TaskPageHandler = (props) => {
  let activityId = parseInt(props.routerProps.match.params.id);
  let isValid = activityId < 100;

  return (
    <div>
        { isValid ? <TaskPage id={activityId} /> : <NotFound /> }
    </div>
  );
}

export default TaskPageHandler
