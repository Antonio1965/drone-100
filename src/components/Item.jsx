import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx"; 
import { Card } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Collapse } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import ExpandMoreIcon  from "@material-ui/icons/ExpandMore";
import accounting from "accounting";
import { AddShoppingCart } from "@material-ui/icons";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
    fontSize: '20px',
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
// --- Destructuracion de objetos.---
export function Item({
  product: { id, name, productType, image, price, rating, description },
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // <IconButton className= 'botton-detail'>
      <Card className={classes.root}>
        <CardHeader
          action={
            <Typography
              className={classes.action}
              variant="p"
              color="textSecondary"
            >
              {accounting.formatMoney(price)}
            </Typography>
          }
          title={name}
          subheader="In Stock"
        />
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {productType}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCart fontSize="large" />
          </IconButton>
          {Array(rating)
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
            <Typography paragraph>{name}</Typography>
            <Typography paragraph>{description}</Typography>
            <Typography>{description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    // {/* </IconButton> */}
  );
}
