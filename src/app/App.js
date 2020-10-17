import React from 'react';
import ComponentGrid from "../components/ComponentGrid";
import './App.css';

function App() {
    var aList = [];
    aList[0] = ("Carousel1");
    aList[1] = ("Carousel2");
    aList[2] = ("Carousel3");
    return (
        <div>
            <ComponentGrid carousels={aList} hi={"hello"}/>
        </div>
    );
}

export default App;
