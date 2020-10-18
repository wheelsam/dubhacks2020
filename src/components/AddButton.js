import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

// Creates a custom theme style for consistent spacing
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: "17px",
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1)
    },
}));

// A function that exports an action button, used for creating new carousel cards.
export default function FloatingActionButtons() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Fab size="small" color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    );
}
