import React, {Component} from 'react';
import './Carousel.css'

class Carousel extends Component {
    // Renders the passed in title, followed by the passed in carousel cards.

    // props: title: string, cards: CarouselCard[]
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