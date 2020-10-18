import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link as RouterLink} from 'react-router-dom';

const TaskPage = (props) => {
  let activityId = parseInt(props.routerProps.match.params.id);
  console.log(props.routerProps);

    /* Create an array of `<li>` items for each product */
  // const linkList = productsData.map((product) => {
  //   return (
  //     <li>
  //       <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
  //     </li>
  //   );
  // });

  return (
    <div>
      {`New Page for ${activityId}`}
    </div>
  );
}

export default TaskPage
