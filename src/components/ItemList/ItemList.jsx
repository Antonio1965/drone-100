import { makeStyles } from "@material-ui/core/styles";
import { Item } from "./Item";
import { Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    
  },
}));

export const ItemList = ({items}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
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
