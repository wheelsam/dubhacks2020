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

    // Checks when the database updates and updates the page accordingly
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
    };

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }


    // Updates the search box
    updateSearch = (value) => {
        this.setState({
            searchString: value
        });
    };

    render() {
      var dict = {};
      this.state.cards.forEach(card => {
        if (card.categories) {
          card.categories.forEach(function (item) {
            let lowerItem = item.toLowerCase();
            if (!(lowerItem in dict)) {
              dict[lowerItem] = [];
            }
            dict[lowerItem].push(
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

      // Creates a carousel for each category found
      const carousels = [];
      //let searchCards = [];
      //let added = [];
      for (let category in dict) {
          /*let cards = dict[category];
          for (let i = 0; i < cards.length; i++) {
              let title = cards[i].props.title;
              console.log(cards[i]);
              if (title.toLowerCase().startsWith(this.state.searchString.toLowerCase())) {
                  searchCards.push(cards[i]);
              }
          }*/
          if (category.toLowerCase().startsWith(this.state.searchString.toLowerCase())) {
              carousels.push(
                <div>
                  <hr />
                  <Carousel key={category} title={category.charAt(0).toUpperCase() + category.slice(1)} cards={dict[category]}/>
                </div>
              );
          }
      }
      /*carousels.unshift(
          <div>
              <hr />
              <Carousel key={"Search Results"} title={"Search Results"} cards={searchCards}/>
          </div>
      );*/

      // Checks to see how many activities have loaded or have been searched for
      let display = [];
      if (carousels.length === 0) {
          if (this.state.searchString === "") {
              display.push(
                  <div>
                      <p className={"Title"}>
                          Loading Activities ...
                      </p>
                  </div>
              )
          } else {
              display.push(
                  <div>
                      <p className={"Title"}>
                          No Category found for {this.state.searchString}
                      </p>
                  </div>
              )
          }
      } else {
          display.push(
              <div>
                <ComponentGrid carousels={carousels}/>
              </ div>
          );
      }
      return (
          <div>
              <div className={"Header"}>
                  <img className={"Logo"} src={logo} alt="Logo" />
                  <Searchbar onChange={this.updateSearch}/>
                  <div className="AddButton">
                      <Link to="/add">
                          <AddButton />
                      </Link>
                  </div>
                  <p className="Username">
                      {this.props.user === ""? 'Sign in' : "Welcome, " + this.props.user}
                  </p>
                  <Profile user={UserData.username}/>
              </div>
              <div className={"ScrollBody"}>
                  {display}
              </div>
          </div>
      );
    }
}

export default HomePage;
