import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link as RouterLink} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function FloatingActionButtons(onClick) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Fab color="primary" aria-label="add" component={RouterLink} to={`/add`}>
                <AddIcon />
            </Fab>
        </div>
    );
}
