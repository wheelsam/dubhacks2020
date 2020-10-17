import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


class Searchbar extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <form className={"search"} noValidate autoComplete="off">
                <TextField id="searchbar" label="Search" variant="outlined" />
            </form>
        );
    }
}

export default Searchbar;
