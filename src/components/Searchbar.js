import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './Searchbar.css'

const theme = createMuiTheme({
    overrides: {
        // Style sheet name️
        MuiTextField: {
            // Name of the rule
            borderRadius: "50px"
        },
    },
});


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
                <ThemeProvider theme={theme}>
                    <TextField className={"searchbar"}
                               id="searchbar"
                               label="Search"
                               variant="outlined"
                               fullWidth
                               margin={"normal"}
                               value={this.state.value}
                               onChange={this.handleChange}
                    />
                </ThemeProvider>
            </form>
        )
    }
}


export default Searchbar;