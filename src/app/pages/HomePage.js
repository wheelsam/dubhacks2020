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

    render() {
      let activities = ActivitiesData.activities;

        //Crafts carousel
        const craftCards = [];
        let id = 0;
        for (let i = 0; i < 10; i++) {
            let thisActivity = activities[id];
            while(!thisActivity.categories.includes("crafts")) {
                id++;
                thisActivity = activities[id];
            }
            craftCards.push(
                <CarouselCard
                    title = {thisActivity.title}
                    description={thisActivity.description}
                    img={thisActivity.imageurl}
                    id={id}
                />
            );
            id++;
        }

      //Hiking carousel
      const hikeCards = [];
      id = 0;
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
