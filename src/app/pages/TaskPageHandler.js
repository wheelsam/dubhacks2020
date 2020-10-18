import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link as RouterLink} from 'react-router-dom';

const TaskPageHandler = (props) => {
  let activityId = parseInt(props.routerProps.match.params.id);

  return (
    <div>
      <TaskPage id={activityId} />
      {`New Page for ${activityId}`}
    </div>
  );
}

export default TaskPageHandler
