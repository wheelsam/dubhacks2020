import React from 'react';
import "./TaskPage.css";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const TaskPage = (props) => {
  return (
    <div className="Overall">
        <Link to="/">
            <Button variant="contained" color="primary">Back</Button>
        </Link>
      <p className="PageTitle">
          {props.title}
      </p>
      <p className="Description">
        {props.description}
      </p>
      <img className="Image" src={props.imageurl} alt={props.title}/>
    </div>
  );
}

export default TaskPage
