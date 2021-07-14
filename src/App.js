import "./Sass/app.css";
import React from "react";
import { NavBar } from "./components/General/NavBar";
import { Footer } from "./components/General/Footer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
// import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = ()=>{
  return (
    <>
    <NavBar title="Drone.Co"/>
    <ItemDetailContainer/>
    <Footer autor="Copyright &copy; -Tsutsumi Jose Antonio - Junio 2021."/>
    </>

  )
}


// export const App = ()=> {
//   return (
//     <>
//       <Router>
//         <NavBar title="Drone.Co" />
//         <Switch>
//           <Route exact path="/">
//             <ItemListContainer />
//           </Route>
//           <Route exact path="/item:id">
//             <ItemDetailContainer/>
//           </Route>
//         </Switch>
//         <Footer autor="Copyright &copy; -Tsutsumi Jose Antonio - Junio 2021." />
//       </Router>
//     </>
//   );
// }
