import React, {Component} from 'react';
import './App.css';
import Searchbar from "../components/Searchbar";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: ""
        }
    }

    updateSearch = (value) => {
        this.setState({
            searchString: value
        });
    };

    render() {
        return (
            <div>
                <Searchbar onChange={this.updateSearch}/>
            </div>
        );
    }
}

export default App;
