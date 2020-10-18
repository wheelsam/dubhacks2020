import React, {Component} from 'react';
import CarouselCard from '../../components/CarouselCard.js';
import ComponentGrid from "../../components/ComponentGrid";
import Profile from "../../components/Profile"
import hike from '../../images/hike.jpg';
import crochet from '../../images/crochet.jpg'
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

    render() {
      let activities = ActivitiesData.activities;

      const craftCards = [];
      for (let i = 10; i < 20; i++) {
          craftCards.push(
              <CarouselCard
                  title="Crochet"
                  description="Crochet Stuff"
                  img={crochet}
                  id={i}
              />
          );
      }

      //Hiking carousel
      const hikeCards = [];
      let id = 0;
      for (let i = 0; i < 10; i++) {
          let thisActivity = activities[id];
          while(!thisActivity.categories.includes("hiking")) {
              id++;
              thisActivity = activities[id];
          }
          hikeCards.push(
              <CarouselCard
                  title = {thisActivity.title}
                  description={thisActivity.description}
                  img={thisActivity.imageurl}
                  id={id}
              />
          );
          id++;
      }

      const carousels = [];
      carousels.push(<Carousel title={"Hikes"} cards={hikeCards}/>);
      carousels.push(<Carousel title={"Crafts"} cards={craftCards}/>);
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
