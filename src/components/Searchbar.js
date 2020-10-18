import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/styles';
import './Searchbar.css'


const styles = theme => ({
  searchBox: {
    width: '80%',
    justifyContent: 'center',
    marginLeft: '1vw',
  },
  search: {
    marginBottom: '16px',
    borderRadius: '50px',
    backgroundColor: 'WHITE',
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
        const { classes } = this.props;
        return (
            <form className={classes.searchBox} noValidate autoComplete="off">
                <TextField id="searchbar"
                           className={classes.search}
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


export default withStyles(styles, { withTheme: true })(Searchbar);
