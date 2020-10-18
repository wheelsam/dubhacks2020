import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import profile from '../images/profile.png'
import './Profile.css'

class Profile extends Component {

    // Renders the profile image and a link to the profile page
    render() {
        return (
            <div>
                <Link to="/profile">
                    <img className={"Profile"} src={profile} alt="Profile"/>
                </Link>
            </div>
        );
    }
}

export default Profile;
