import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            UsernameError: false,
            UsernameErrorText: "",
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            Username: event.target.value
        })
    };

    handleSubmitButton = () => {
        let good = true;
        if (this.state.Username === "") {
            this.setState({
                UsernameError: true,
                UsernameErrorText: "You must enter a username"
            })
            good = false;
        } else {
            this.setState({
                TitleError: false,
                TitleErrorText: ""
            })
        }
        if (good === true) {
            // This is where the username needs to be sent back to the homepage
            this.props.history.push("/");
        }
    };

    render() {
        return (
            <div>
                <p>
                    Welcome to un.bored
                </p>
                <TextField id="Username"
                           label="Username"
                           variant="outlined"
                           fullWidth
                           margin={"normal"}
                           value={this.state.Username}
                           error={this.state.UsernameError}
                           helperText={this.state.UsernameErrorText}
                           onChange={this.handleUsernameChange}
                />
                <Button variant="contained" onClick={this.handleSubmitButton}>Submit</Button>
                <Link to="/">
                    <Button variant="contained" color="secondary">Back</Button>
                </Link>
            </div>
        );
    }
}

export default ProfilePage;