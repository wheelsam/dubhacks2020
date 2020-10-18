import React, {Component} from 'react';
import CarouselCard from '../components/CarouselCard.js';
import ComponentGrid from "../components/ComponentGrid";
import Profile from "../components/Profile"
import hike from '../images/hike.jpg';
import crochet from '../images/crochet.jpg'
import './App.css';
import Searchbar from "../components/Searchbar";
import Carousel from "../components/Carousel";
import AddButton from "../components/AddButton";

const craftCards = [];
for (let i = 1; i < 11; i++) {
    craftCards.push(
        <CarouselCard
            title="Crochet"
            description="Crochet Stuff"
            img={crochet}
            id={i}
        />
    );
}

const hikeCards = [];
for (let i = 1; i < 11; i++) {
    hikeCards.push(
        <CarouselCard
            title="Hiking"
            description="Mount Si: Washington State, 8 mile round trip hike with steep elevation gain.  Intermediate hike"
            img={hike}
            id={i}
        />
    );
}

const carousels = [];
carousels.push(<Carousel title={"Hikes"} cards={hikeCards}/>);
carousels.push(<Carousel title={"Crafts"} cards={craftCards}/>);



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
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
                <div className={"Header"}>
                    <Searchbar onChange={this.updateSearch}/>
                    <Profile/>
                </div>
                <CarouselCard
                    title="Hiking"
                    description="Mount Si: Washington State, 8 miled round trip hike with steep elevation gain.  Intermediate hike"
                    img={hike}
                    id={1}
                />
                <ComponentGrid carousels={carousels}/>
                <AddButton />
            </div>
        );
    }
}

export default App;
