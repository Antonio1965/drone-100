import {Footer} from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetail } from './components/ItemDetail';

import './Sass/app.css';


export function App() {
  return (
    <>
      <NavBar title='Drone.Co'/>
      <ItemDetail/>
    {/* <ItemListContainer/>   */}
      <Footer autor="Copyright &copy;, derechos reservados Drone.Co -Junio 2021" />
    </>
  );
}


