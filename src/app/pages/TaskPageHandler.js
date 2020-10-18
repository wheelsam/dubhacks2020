import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
//import { Link as RouterLink} from 'react-router-dom';
import TaskPage from './TaskPage.js';
import NotFound from './NotFound.js';
import LoadPage from "./LoadPage";
import firebase from "../../components/Firebase/firebase.js"

class TaskPageHandler extends React.Component {
  constructor(props) {
      super(props);
      this.ref = firebase.firestore().collection('activities');
      this.state = {
          thisActivity: null,
          isValid: false,
          isLoaded: false
      }
  }

  async componentDidMount() {
      let activityId = this.props.routerProps.match.params.id;
      var docRef = firebase.firestore().collection("activities").doc(activityId);

      // console.log(firebase.firestore().collection("activities").doc('a81da150-111d-11eb-9e88-a14d58880587'));

      const doc = await docRef.get();
      if (doc.exists) {
        this.setState({
          isValid: true,
          isLoaded: true,
          thisActivity: doc.data(),
        });
      } else {
          this.setState({
              isLoaded: true,
          });
      }
  }

  render() {
      let display = [];
      if (!this.state.isLoaded) {
          display.push(
              <div>
                  <LoadPage />
              </div>
          )
      } else if (!this.state.isValid){
          display.push(
              <div>
                  <NotFound />
              </div>
          )
      } else {
          display.push(
              <TaskPage
                  id={this.state.thisActivity.key}
                  title={this.state.thisActivity.title}
                  description={this.state.thisActivity.description}
                  imageurl={this.state.thisActivity.imageurl}/>
          )
      }
    return (
      <div>
          {display}
      </div>
    );
  }
}

export default TaskPageHandler
