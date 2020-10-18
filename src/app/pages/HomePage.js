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
import firebase from "../../components/Firebase/firebase.js"



class HomePage extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('activities');
        this.unsubscribe = null;
        this.state = {
            searchString: "",
            cards: []
        }
    }

    onCollectionUpdate = (querySnapshot) => {
      const cards = [];
      querySnapshot.forEach((doc) => {
        const { title, description, category } = doc.data();
        cards.push({
          key: doc.id,
          doc, // DocumentSnapshot
          title,
          description,
          author,
        });
      });
      this.setState({
        cards
     });
    }

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
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
