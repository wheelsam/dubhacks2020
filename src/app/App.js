import React from 'react';
import CarouselCard from '../components/CarouselCard.js';
import CardMedia from '@material-ui/core/CardMedia';
import hike from '../images/hike.jpg';
import './App.css';

function App() {
  return (
    <div>
      <CarouselCard
        title="Hiking"
        description="Mount Si: Washington State, 8 miled round trip hike with steep elevation gain.  Intermediate hike"
        img={hike}
        id={1}
       />
    </div>
  );
}

export default App;
