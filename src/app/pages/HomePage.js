import React, {Component} from 'react';
import CarouselCard from '../../components/CarouselCard.js';
import ComponentGrid from "../../components/ComponentGrid";
import Profile from "../../components/Profile"
import './HomePage.css';
import Searchbar from "../../components/Searchbar";
import Carousel from "../../components/Carousel";
import AddButton from "../../components/AddButton";
//import { Route } from "react-router-dom";
import {Link} from "react-router-dom";
import UserData from "../../data/User.json"
import ActivitiesData from "../../data/ActivitiesData.json"



class HomePage extends Component {

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

    createCarouselCards(tag) {
        let activities = ActivitiesData.activities;
        let cards = [];
        let id = 0;
        for (let i = 0; i < 10; i++) {
            let thisActivity = activities[id];
            try {
                while (!thisActivity.categories.includes(tag)) {
                    id++;
                    thisActivity = activities[id];
                }
            } catch (e) {
                return cards;
            }
            cards.push(
                <CarouselCard
                    title = {thisActivity.title}
                    description={thisActivity.description}
                    img={thisActivity.imageurl}
                    id={id}
                />
            );
            id++;
        }
        return cards;
    }

    render() {
        const carousels = [];

        //Hiking carousel
        let cards = this.createCarouselCards("hiking");
        carousels.push(<Carousel title={"Hikes"} cards={cards}/>);

        cards = this.createCarouselCards("crafts");
        carousels.push(<Carousel title={"Crafts"} cards={cards}/>);

        cards = this.createCarouselCards("sports");
        carousels.push(<Carousel title={"Sports"} cards={cards}/>);

        return (
            <div>
                <div className={"Header"}>
                    <Searchbar onChange={this.updateSearch}/>
                    <Profile user={UserData.username}/>
                </div>
                <ComponentGrid carousels={carousels}/>
                <Link to="/add">
                    <AddButton />
                </Link>
            </div>
        );
    }
}

export default HomePage;
