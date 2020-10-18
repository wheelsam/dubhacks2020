import React, {Component} from 'react';
import './ComponentGrid.css';

class ComponentGrid extends Component {

    // Renders the list of carousels
    // props carousels: Carousel[]
    render() {
        const listOfCarousels = [];
        for (let i = 0; i < this.props.carousels.length; i++) {
            listOfCarousels[i] = (
                <div className={"Carousel"} key={i}>
                    {this.props.carousels[i]}
                </div>
            );
        }
        return (
            <div>
                {listOfCarousels}
            </div>
        );
    }
}

export default ComponentGrid;
