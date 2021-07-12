import { makeStyles } from "@material-ui/core/styles";
import { Item } from "./Item";
import { Grid } from "@material-ui/core";
import { nodeName } from "jquery";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    
  },
}));

export const ItemList = ({items}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {/*--- Mapeo de los Productos--- */}
        {
          items.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item key={product.id} product={product} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};
