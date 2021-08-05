import logo from './logo.gif';
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


function App() {

const dispatch =useDispatch()
const productsHome= useSelector((state :IStore)=>state.shopStore.products)



  useEffect(() => {
 axios.get("https://rooftop-api-rest-frontend.herokuapp.com/items?limit=4")
.then(res=>{
  dispatch(addProductsHome(res.data.items))
})
.catch(err=>console.log(err.message))
  }, [dispatch])


  axios.get("https://rooftop-api-rest-frontend.herokuapp.com/items")
  .then(res=>{
    dispatch(addProductsCatalogue(res.data.items))
    console.log(productsHome)
  })
  .catch(err=>console.log(err.message))
  





  
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
{productsHome.map(product=><Product key={product.id}  product={product}/>)   }

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
