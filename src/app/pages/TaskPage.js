import React from 'react';
import "./TaskPage.css";

const TaskPage = (props) => {
  return (
    <div className="Overall">
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
