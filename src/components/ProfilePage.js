import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import './ProfilePage.css';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            UsernameError: false,
            UsernameErrorText: "",
        }
    }

    // Updates the username in this components state
    handleUsernameChange = (event) => {
        this.setState({
            Username: event.target.value
        })
    };

    // Checks to make sure the input is good. Updates username in App if it is good.
    // Shows an error message if the input is bad.
    handleSubmitButton = () => {
        let good = true;
        if (this.state.Username === "") {
            this.setState({
                UsernameError: true,
                UsernameErrorText: "You must enter a username"
            })
            good = false;
        } else if (this.state.Username.length > 13) {
            this.setState({
                UsernameError: true,
                UsernameErrorText: "Please use a username of less than 14 characters"
            });
            good = false;
        } else {
            this.setState({
                TitleError: false,
                TitleErrorText: ""
            })
        }
        if (good === true) {
            this.props.setUser(this.state.Username);
            this.props.routerProps.history.push("/");
        }
    };

    // Renders a profile input page
    render() {
        return (
            <div className="profilePage">
                <p>
                    Welcome to un.bored
                </p>
                <p className="Signin">
                    Sign In
                </p>
                <TextField id="Username"
                           label="Username"
                           variant="outlined"
                           className="UsernameBox"
                           margin={"normal"}
                           value={this.state.Username}
                           error={this.state.UsernameError}
                           helperText={this.state.UsernameErrorText}
                           onChange={this.handleUsernameChange}
                />
                <br />
                <Link to="/">
                    <Button variant="contained" className="butt">Back</Button>
                </Link>
                <Button variant="contained" className="butt" color="primary" onClick={this.handleSubmitButton}>Submit</Button>
            </div>
        );
    }
}

export default ProfilePage;
