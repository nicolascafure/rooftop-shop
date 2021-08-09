import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/views/Home";
import Catalogo from "./components/views/Catalogue";
import Detail from "./components/views/Detail";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Cart from "./components/views/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchProductsCatalogue,
  fetchProductsHome,
} from "./redux/services/productServices";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsHome());
    dispatch(fetchProductsCatalogue());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header />
<div className="non-header">
        <Switch>
          <Route path="/catalogo/:page">
            <Catalogo />
          </Route>
          <Route path="/catalogo">
            <Catalogo />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/cart">
           <Cart/>
          </Route>

          <Route path="/">
            <Home />

            
          </Route>
        </Switch>
        <Footer />
        </div>
      </Router>
    
    </>
  );
}

export default App;
