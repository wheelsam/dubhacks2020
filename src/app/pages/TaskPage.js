import React from 'react';
import "./TaskPage.css";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import logo from "../../images/logo.jpg";

const TaskPage = (props) => {
    // creates a simple page to display all the data
  return (
    <div className="Overall">
        <div className="Header">
            <img className="TaskLogo" src={logo} alt="Logo" />
            <div className="BackContainer">
                <Link to="/">
                    <Button className="Back" variant="contained" color="primary">Back</Button>
                </Link>
            </div>
        </div>
      <p className="PageTitle">
          {props.title}
      </p>
      <p className="Description">
        {props.description}
      </p>
      <img className="Image" src={props.imageurl} alt={props.title}/>
    </div>
  );
};

export default TaskPage
