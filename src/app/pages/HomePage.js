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
        const { title, description, categories, imageurl } = doc.data();
        cards.push({
          key: doc.id,
          doc, // DocumentSnapshot
          title,
          description,
          categories,
          imageurl,
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

      var dict = {};

      this.state.cards.map(card => {
        if (card.categories) {
          card.categories.forEach(function (item, index) {
            if (!(item in dict)) {
              dict[item] = [];
            }
            dict[item].push(
              <CarouselCard
                  title={card.title}
                  description={card.description}
                  img={card.imageurl}
                  id={card.key}
              />
            )
          });
        }
      });

      const carousels = [];

      for (let category in dict) {
          carousels.push(<Carousel key={category} title={category.charAt(0).toUpperCase() + category.slice(1)} cards={dict[category]}/>);
      }
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
