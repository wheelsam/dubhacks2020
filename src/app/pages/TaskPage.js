import React from 'react';

const TaskPage = (props) => {
  return (
    <div>
      {`New Page for id #${props.id}`}
      <p>
        Title: {props.title}
      </p>
      <p>
        Description: {props.description}
      </p>
      <img src={props.imageurl}/>
    </div>
  );
}

export default TaskPage
