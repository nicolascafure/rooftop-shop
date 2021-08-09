import logo from "../../images/logo.gif"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import{IStore} from "../../interfaces/iShopStore"
 
const Header: React.FunctionComponent = () => {
  const cart= useSelector((state :IStore)=>state.shopStore.productsCart)
    return ( 

        <div className="contenedor-nav"><div className="logo-top"><img src={logo} alt=""></img></div>
         <nav>      
         <Link to="/">HOME</Link>
         <Link to="/catalogo/1">CATALOGO</Link>
         <Link to="/cart"> CARRITO {cart.length}</Link>
   

       </nav></div>
     );
}
 
export default Header;