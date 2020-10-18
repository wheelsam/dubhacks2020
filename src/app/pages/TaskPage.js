import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link as RouterLink} from 'react-router-dom';

const TaskPage = (props) => {

  return (
    <div>
      {`New Page for ${props.id}`}
    </div>
  );
}

export default TaskPage
