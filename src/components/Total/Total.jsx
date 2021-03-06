import { makeStyles, Button } from "@material-ui/core";
import  accounting from "accounting";
import { getBasketTotal } from "../../reducer";
import { useStateValue }  from "../../StateProvider";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height:'20vh'
  },
  button: {
    marginTop: "2rem",
  },
}));

export const Total = () => {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <h5 className='total-item'>Total items:{basket?.length}</h5>
      <h5> {accounting.formatMoney(getBasketTotal(basket), )}</h5>
      <Button className={classes.button} variant="contained" color="secondary">
        Check out
      </Button>
    </div>
  );
};
