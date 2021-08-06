import logo from './images/logo.gif';
import ImageGallery from 'react-image-gallery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from './utils/Banner';
import axios from 'axios';
import {useEffect} from "react"
import {shuffle} from 'underscore';
import { useSelector } from 'react-redux';
import {IStore} from "./interfaces/iShopStore";
import { useDispatch } from 'react-redux';
import {addProductsHome} from "./redux/actions/product";
import Product from './components/Product';
import Catalogo from './pages/Catalogo';
import Detail from './pages/Detail';
import {addProductsCatalogue} from "./redux/actions/product";
import {fetchProductsCatalogue, fetchProductsHome} from "./redux/services/productServices"


function App() {

const dispatch =useDispatch()
const productsHome= useSelector((state :IStore)=>state.shopStore.products)

  useEffect(() => {
dispatch(fetchProductsHome())
dispatch(fetchProductsCatalogue())
  }, [dispatch])







  
  return (
    <> <Router>
     <div className="contenedor-nav"><div className="logo-top"><img src={logo} alt=""></img></div>
         <nav>      
         <Link to="/">HOME</Link>
         <Link to="/catalogo">CATALOGO</Link>
       </nav></div>


        <Switch>
          <Route path="/catalogo/:page">
           <Catalogo/>
          </Route>
          <Route path="/catalogo">
           <Catalogo/>
          </Route>
          <Route path="/detail/:id">
           <Detail/>
          </Route>

          <Route path="/">
        
          <ImageGallery items={Banner} showFullscreenButton={false}  showPlayButton={false}  autoPlay={true}  slideDuration={2500} slideInterval={6000}/>

<div className="container-products-home">
{shuffle(productsHome).map(product=><Product key={product.id}  product={product}/>)   }

</div>

          </Route>
        </Switch>
    


    <footer>
    © Power by Nicolás Cafure Design | Rooftop {new Date().getFullYear()}
    </footer>
  </Router>





    </>
  );
}

export default App;
