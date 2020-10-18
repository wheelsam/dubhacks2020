import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import { StylesProvider } from "@material-ui/core/styles";
import './Searchbar.css'


class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    // Sets the state when user types
    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onChange(event.target.value);
    };

    // Renders a styled search bar
    render() {
        return (
            <StylesProvider injectFirst>
              <form className={"search"} noValidate autoComplete="off">
                  <TextField id="searchbar"
                             label="Search"
                             variant="outlined"
                             fullWidth
                             margin={"normal"}
                             value={this.state.value}
                             onChange={this.handleChange}
                  />
              </form>
            </ StylesProvider>
        )
    }
}


export default Searchbar;
