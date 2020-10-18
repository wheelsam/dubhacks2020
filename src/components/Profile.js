import React, {Component} from 'react';
import profile from '../images/profile.png'
import './Profile.css'

class Profile extends Component {
    render() {
        return (
            <div>
                <img className={"Profile"} src={profile} alt="Profile"/>
            </div>
        );
    }
}

export default Profile;