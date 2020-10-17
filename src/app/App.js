import React from 'react';
import ComponentGrid from "../components/ComponentGrid";
import CarouselCard from '../components/CarouselCard.js';
import CardMedia from '@material-ui/core/CardMedia';
import hike from '../images/hike.jpg';
import './App.css';
import Searchbar from "../components/Searchbar";

function App() {
  var aList = [];
  aList[0] = ("Carousel1");
  aList[1] = ("Carousel2")    aList[2] = ("Carousel3");
  return (
    <div>
      <CarouselCard
        title="Hiking"
        description="Mount Si: Washington State, 8 miled round trip hike with steep elevation gain.  Intermediate hike"
        img={hike}
        id={1}
       />
       <Searchbar/>
       <ComponentGrid carousels={aList} hi={"hello"}/>
    </div>
  );
}

export default App;
