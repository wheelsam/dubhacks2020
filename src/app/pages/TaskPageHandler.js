import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
//import { Link as RouterLink} from 'react-router-dom';
import TaskPage from './TaskPage.js';
import NotFound from './NotFound.js';
import ActivitiesData from "../../data/ActivitiesData.json"

const TaskPageHandler = (props) => {
  let activityId = parseInt(props.routerProps.match.params.id);
  let activities = ActivitiesData.activities;
  let isValid = activityId < activities.length;
  let thisActivity = activities[activityId];

  return (
    <div>
        { isValid ? <TaskPage id={activityId} title={thisActivity.title} description={thisActivity.description}/> : <NotFound /> }
    </div>
  );
}

export default TaskPageHandler
