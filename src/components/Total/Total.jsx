import React from "react";
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
  },
  button: {
    marginTop: "2rem",
  },
}));

export const Total = () => {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <h5>Total items:{basket?.length}</h5>
      <h5> {accounting.formatMoney(getBasketTotal)}</h5>
      <Button className={classes.button} variant="contained" color="secondary">
        Check out
      </Button>
    </div>
  );
};