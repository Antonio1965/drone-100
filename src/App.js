import {Footer} from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from './components/ItemListContainer';

import './Sass/app.css';


export function App() {
  return (
    <>
      <NavBar title='Drone.Co'/>
      <ItemListContainer/>
      <Footer autor="Copyright &copy;, derechos reservados Drone.Co -Junio 2021" />
    </>
  );
}


