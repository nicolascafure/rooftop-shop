import React from 'react';
import logo from './logo.gif';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
           Home
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
