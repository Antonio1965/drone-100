import {Footer} from "./components/Footer";
import {Product} from './components/Product';
import { NavBar } from "./components/NavBar";

import './Sass/app.css';


function App() {
  return (
    <>
      <NavBar title='Drone.Co'/>
      <Product/>
      <Footer autor="Copyright &copy;, derechos reservados Drone.Co -Junio 2021" />
    </>
  );
}

export default App;
