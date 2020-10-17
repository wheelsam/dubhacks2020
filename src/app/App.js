import React, {Component} from 'react';
import CarouselCard from '../components/CarouselCard.js';
import ComponentGrid from "../components/ComponentGrid";
import CardMedia from '@material-ui/core/CardMedia';
import hike from '../images/hike.jpg';
import './App.css';
import Searchbar from "../components/Searchbar";

var aList = [];
aList[0] = ("Carousel1");
aList[1] = ("Carousel2");
aList[2] = ("Carousel3");

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
                <ComponentGrid carousels={aList} hi={"hello"}/>
            </div>
        );
    }
}

export default App;
