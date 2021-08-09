import {IStore} from "../../interfaces/iShopStore"
import { useSelector } from "react-redux";

const Cart: React.FunctionComponent = () => {
    const cart= useSelector((state :IStore)=>state.shopStore.productsCart)
    return (  <>
    <h1>carrito</h1>
{cart.map(product=> <h1>{product.title}</h1>)}
</>
    );
}
 
export default Cart;