import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/styles';
import './Searchbar.css'

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'black'
    }
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
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="searchbar"
                           label="Search"
                           variant="outlined"
                           fullWidth
                           margin={"normal"}
                           value={this.state.value}
                           onChange={this.handleChange}
                           InputProps={{
                               className: classes.input,
                           }}
                />
            </form>
        )
    }
}

Searchbar.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Searchbar);