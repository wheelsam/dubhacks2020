import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link as RouterLink} from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Creates a style to be applied to the carousel cards
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    maxHeight: 300,
    minHeight: 300,
    margin: 10,
    overflow: 'hidden',
  },
  media: {
    height: 140,
  },
});

// returns a Carousel Card given:
// props: title: string, description: string, img: string, id: string
export default function CarouselCard(props, match) {
  const classes = useStyles();
  const {title, description, img, id} = props;

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea component={RouterLink} to={`/activity/${id}`}>
          <CardMedia
            className={classes.media}
            image={img}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
