import React, {Component} from 'react';
import CarouselCard from '../components/CarouselCard.js';
import CardMedia from '@material-ui/core/CardMedia';
import hike from '../images/hike.jpg';
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
                <CarouselCard
                    title="Hiking"
                    description="Mount Si: Washington State, 8 miled round trip hike with steep elevation gain.  Intermediate hike"
                    img={hike}
                    id={1}
                />
            </div>
        );
    }
}

export default App;
