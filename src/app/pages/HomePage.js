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
import logo from '../../images/logo.jpg'



class HomePage extends Component {

    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('activities');
        this.unsubscribe = null;
        this.state = {
            searchString: "",
            cards: [],
            categories: ""
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

      this.state.cards.forEach(card => {
        if (card.categories) {
          card.categories.forEach(function (item, index) {
            if (!(item.toLowerCase() in dict)) {
              dict[item.toLowerCase()] = [];
            }
            dict[item.toLowerCase()].push(
              <CarouselCard
                  title={card.title}
                  description={card.description}
                  img={card.imageurl}
                  id={card.key}
                  key={card.key}
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
                  <img className={"Logo"} src={logo} alt="Logo" />
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
