import React, {Component} from 'react';

class Searchbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <input type="text" id="searchBar" placeholder="Search"/>;
    }
}

export default Searchbar;
