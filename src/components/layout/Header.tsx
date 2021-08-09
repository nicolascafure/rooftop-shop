import logo from "../../images/logo.gif"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import{IStore} from "../../interfaces/iShopStore"
import iconCart from "../../images/cart.svg"
 
const Header: React.FunctionComponent = () => {
  const cart= useSelector((state :IStore)=>state.shopStore.productsCart)
    return ( 

        <div className="contenedor-nav"><div className="logo-top"><img src={logo} alt=""></img></div>
         <nav>      
         <Link to="/">HOME</Link>
         <Link to="/catalogo/1">CATALOGO</Link>
         <Link to="/cart"> <div className="nav-cart"><img className="icon-cart" src={iconCart}></img> <p className="cart-length">{cart.length}</p></div></Link>
   

       </nav></div>
     );
}
 
export default Header;