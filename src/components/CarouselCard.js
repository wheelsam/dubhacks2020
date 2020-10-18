import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link as RouterLink} from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    maxHeight: 300,
    minHeight: 300,
    margin: 10,
    overflow: "auto"
  },
  media: {
    height: 140,
  },
});

export default function CarouselCard(props, match) {
  const classes = useStyles();
  const {title, description, img, id/*, pageData*/} = props;

    /* Create an array of `<li>` items for each product */
  // const linkList = productsData.map((product) => {
  //   return (
  //     <li>
  //       <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
  //     </li>
  //   );
  // });

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea component={RouterLink} to={`/activity/${id}`}>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
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
