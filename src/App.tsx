import React from 'react';
import logo from './logo.gif';
import ImageGallery from 'react-image-gallery';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from './utils/Banner';


function App() {


  
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
        
          <ImageGallery items={Banner} />



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
