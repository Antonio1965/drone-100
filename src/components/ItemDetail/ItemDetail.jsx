import React, { useState } from "react";
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
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import accounting from "accounting";
import { AddShoppingCart } from "@material-ui/icons";
import {Counter} from '../Counter/Counter';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 445,
    margin: "0.2rem auto",
  
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
  avatar: {
    backgroundColor: red[500],
  },
  compra: {
    textAlign:'center',
  },
  boton:{
    color:'green',
    border: 'solid 1px black',
    marginBottom:'0.5rem',
    
  },

}));

export const ItemDetail = ({listItems:item}) => {
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
            {accounting.formatMoney(item.price)}
          </Typography>
        }
        title={item.name}
        subheader="In Stock"
      />
      <CardMedia
        className={classes.media}
        image={item.image}
        title="Drone-Word."
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {item.productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart fontSize="large" />
        </IconButton>

        {Array(item.rating)
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
          <Typography paragraph>Teorias:</Typography>
          <Typography paragraph>H</Typography>
          <Typography paragraph>
            Los drones con cámara se han convertido en una gran tendencia para
            los amantes de estos aparatos. Y es que podemos obtener una
            grabaciones en vídeo con una calidad excepcional, y lo mejor de todo
            es que podemos filmar en la situaciones más complejas. Algo que
            anteriormente solo se podía hacer para las producciones
            cinematográficas más importantes, pero que poco a poco ya son muchos
            los que pueden hacer este tipo de grabaciones sin mucho esfuerzo.
          </Typography>
          <Typography paragraph>aaaaaaaaaaaaaaaaaaaa</Typography>
          <Typography>bbbbbbbbbbbbbbbbbbb</Typography>
        </CardContent>
      </Collapse>
      <Counter/>
      <Typography
        className={classes.compra}
      >
      <IconButton className={classes.boton}>COMPRAR</IconButton>
      </Typography>
    </Card>
  );
};
