import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import profile from '../images/profile.png'
import './Profile.css'

class Profile extends Component {
    render() {
        return (
            <div>
                <Link to="/profile">
                    <img className={"Profile"} src={profile} alt="Profile"/>
                </Link>
                <p>
                    {this.props.user}
                </p>
            </div>
        );
    }
}

export default Profile;