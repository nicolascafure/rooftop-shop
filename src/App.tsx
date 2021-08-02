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
import { useState } from 'react';
import _, {shuffle} from 'underscore';
import { useSelector } from 'react-redux';
import {IStore} from "./interfaces/iShopStore";





function App() {

  const productsList= useSelector((state :IStore)=>state.shopStore.products)
  console.log(productsList)

  const [products, setProducts] = useState([])

  useEffect(() => {
axios.get("https://rooftop-api-rest-frontend.herokuapp.com/items?limit=4")
.then(res=>{
  let a = res.data.items
  console.log( _.shuffle(a))

})
.catch(err=>console.log(err.message))

  }, [])



  
  return (
    <> <Router>
     <div className="contenedor-nav"><div className="logo-top"><img src={logo} alt=""></img></div>
         <nav>      
         <Link to="/">HOME</Link>
         <Link to="/catalogo">CATALOGO</Link>
       </nav></div>


        <Switch>
          <Route path="/catalogo">
            catalogo
          </Route>

          <Route path="/">
        
          <ImageGallery items={Banner} showFullscreenButton={false}  showPlayButton={false}  autoPlay={true}  slideDuration={2500} slideInterval={6000}/>



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
