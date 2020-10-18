import React from 'react';
import "./TaskPage.css"

const TaskPage = (props) => {
  return (
    <div>
        <div className="Overall">
            <p className="Title">
                Title: {props.title}
            </p>
            <p className="Description">
                Description: {props.description}
            </p>
            <img className="Image" src={props.imageurl} alt={props.title}/>
        </div>
    </div>
  );
}

export default TaskPage
