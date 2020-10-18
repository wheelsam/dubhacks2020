import React, {Component} from 'react';
import './Carousel.css'

class Carousel extends Component {
    render() {
        return (
            <div>
                <p className="Title">
                    {this.props.title}
                </p>
                <div className="Body">
                    {this.props.cards}
                </div>
            </div>
        );
    }
}

export default Carousel;