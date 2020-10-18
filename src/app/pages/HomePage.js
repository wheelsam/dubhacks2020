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
import firebase from "../../components/Firebase/firebase.js"



class HomePage extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('activities');
        console.log(this.ref);
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
      const craftCards = [];
      this.state.cards.map(card => {
        if (card.categories.includes("crafts")) {
          craftCards.push(
              <CarouselCard
                  title={card.title}
                  description={card.description}
                  img={card.imageurl}
                  id={card.key}
              />
          );
        }
      });

      //Hiking carousel
      const outdoorCards = [];
      this.state.cards.map(card => {
        if (card.categories.includes("hiking")) {
          outdoorCards.push(
              <CarouselCard
                  title={card.title}
                  description={card.description}
                  img={card.imageurl}
                  id={card.key}
              />
          );
        }
      });

      const carousels = [];
      carousels.push(<Carousel title={"Outdoors"} cards={outdoorCards}/>);
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
