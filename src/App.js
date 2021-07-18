import "./Sass/app.css";
import { NavBar } from "./components/General/NavBar";
import { Footer } from "./components/General/Footer";
import { ItemList } from "./components/ItemList/ItemList";
import { CheckoutPages } from "./components/Checkout/CheckoutPages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Router>
        <NavBar title="Drone.Co" />
        <Switch>
          <Route exact path="/checkout-page">
            <CheckoutPages />
          </Route>
          <Route exact path="/">
            <ItemList />
          </Route>
        </Switch>
        <Footer autor="Copyright &copy; -Tsutsumi Jose Antonio - Junio 2021." />
      </Router>
    </>
  );
};
