import {Footer} from "./components/Footer";
import {Product} from './components/Product';
import { NavBar } from "./components/NavBar";
import { Products } from './components/Products';

import './Sass/app.css';


function App() {
  return (
    <>
      <NavBar title='Drone.Co'/>
      {/* <Product/> */}
      <Products/>
      <Footer autor="Copyright &copy;, derechos reservados Drone.Co -Junio 2021" />
    </>
  );
}

export default App;
