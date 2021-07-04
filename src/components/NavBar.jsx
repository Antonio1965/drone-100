
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Badge} from '@material-ui/core';
import logo from '../img/logo/antonio1.svg';
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '6rem',
  },
 appBar: {
     backgroudColor: 'black',
     boxShadow: 'none',
 },
  grow: {
    flexGrow: 1,
  },
  button:{
      backgroudColor:'azure',
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
  },
  image: {
      marginRight: '10px',
      height: '4rem',
  },
  
}));

export  function NavBar({title}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <IconButton>
              <img
                className={classes.image}
                src={logo}
                height="45px"
                alt="logo"
              />
              <h1 className="nav-title">{title}</h1>
            </IconButton>
          <div className={classes.grow} />
          <Typography variant="h5" component="p">
            <strong>Hello Guest</strong>
          </Typography>
          <div className={classes.button}>
            <Button  variant= 'outlined'>
           <span className='boton'>Sing In</span> 
            </Button>
          </div>
            <IconButton aria-label="show cart items" color="inherent">
              <Badge badgeContent={5} color="secondary">
                <ShoppingCart
                  fontSize="large"
                  className="carro"
                  color="azure"
                />
              </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

    


