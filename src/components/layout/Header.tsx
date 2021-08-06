import logo from "../../images/logo.gif"
import { Link } from 'react-router-dom';
 
const Header: React.FunctionComponent = () => {
    return ( 

        <div className="contenedor-nav"><div className="logo-top"><img src={logo} alt=""></img></div>
         <nav>      
         <Link to="/">HOME</Link>
         <Link to="/catalogo">CATALOGO</Link>
       </nav></div>
     );
}
 
export default Header;