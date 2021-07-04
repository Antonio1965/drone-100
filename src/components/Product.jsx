import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import accounting from 'accounting';
import { AddShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
      marginTop: '1rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
}));

export function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
            <Typography
              className={classes.action}
              variant="h5"
              color="textSecondary"
            >
              {accounting.formatMoney(50)}
            </Typography>
          }
        title="Drone-Warr"
        subheader="In Stock"
      />
      <CardMedia
        className={classes.media}
        image='https://th.bing.com/th/id/OIP.4CFwGOvHKH58AHtBrjUcGQHaEK?pid=ImgDet&rs=1'
        title="Drone-Warr"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Drone-Warr-2021.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="Add to Cart">
          <AddShoppingCart fontSize="large" />
        </IconButton>
        {Array(5)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
           Drone todo terreno.
          </Typography>
          <Typography paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, labore.
          </Typography>
          <Typography>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, repudiandae.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
