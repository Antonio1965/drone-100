import React, { useState } from 'react';
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
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import accounting from 'accounting';
import { AddShoppingCart } from "@material-ui/icons";
import { products } from "../product-data";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    margin:'auto',
    marginTop: '10rem',
    marginBottom: '5rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export function ItemDetail() {

  const product = products.product;
    const [listItems, setListItems ] = useState([]);
  
    const getItems = () => {
        return new Promise ((resolve, rejet)=>{
        setTimeout(()=>{
            resolve(products)
        },2000
        )})
    }
    getItems()
    .then((resolse) => setListItems(resolse))
  
  console.log(products);


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
            {accounting.formatMoney(15000)}
          </Typography>
        }
        title="Drone-Word.."
        subheader="In Stock"
      />
      <CardMedia
        className={classes.media}
        image="https://th.bing.com/th/id/R.96f6fb08b2ca2488b92abbc33564d754?rik=9SfUCqzzA7qjqQ&riu=http%3a%2f%2faficionesyocio.com%2fwp-content%2fuploads%2fsites%2f24%2f2015%2f10%2ftricubo-drone-heli-max-230si-cuadricoptero-rtf-camara-hd-477301-MLA20310407179_052015-F.jpg&ehk=lAU6IPZMf9CVk%2bCLWllrDaWoxl4kVDPcRpwys60B8M8%3d&risl=&pid=ImgRaw"
        title="Drone-Word."
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         sss
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
          <Typography paragraph>Teorias:</Typography>
          <Typography paragraph>
            H
          </Typography>
          <Typography paragraph>
          Los drones con cámara se han convertido en una gran tendencia para los amantes de estos aparatos. Y es que podemos obtener una grabaciones en vídeo con una calidad excepcional, y lo mejor de todo es que podemos filmar en la situaciones más complejas. Algo que anteriormente solo se podía hacer para las producciones cinematográficas más importantes, pero que poco a poco ya son muchos los que pueden hacer este tipo de grabaciones sin mucho esfuerzo.
          </Typography>
          <Typography paragraph>
            aaaaaaaaaaaaaaaaaaaa
          </Typography>
          <Typography>
           bbbbbbbbbbbbbbbbbbb
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


