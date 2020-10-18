import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import './Searchbar.css'


class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <form className={'search'} noValidate autoComplete="off">
                <TextField id="searchbar"
                           label="Search"
                           variant="outlined"
                           fullWidth
                           margin={"normal"}
                           value={this.state.value}
                           onChange={this.handleChange}
                />
            </form>
        )
    }
}


export default Searchbar;