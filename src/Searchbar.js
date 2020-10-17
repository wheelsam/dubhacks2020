import React, {Component} from 'react';
import './index.css';

class Searchbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <input type="text" id="searchBar" placeholder="Search"/>;
    }
}

export default Searchbar;