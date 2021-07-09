import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Item } from "./Item";
import { Grid } from "@material-ui/core";
import products from "../product-data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginLeft: "4rem",
  },
}));

export const ItemList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {/*--- Mapeo de los Productos--- */}
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
