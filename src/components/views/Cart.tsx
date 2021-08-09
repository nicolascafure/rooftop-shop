import {IStore} from "../../interfaces/iShopStore"
import { useSelector } from "react-redux";
import ProductCart from "../common/ProductCart";

const Cart: React.FunctionComponent = () => {
    const cart= useSelector((state :IStore)=>state.shopStore.productsCart)
    return (  <>
    <h1>carrito</h1>
{cart.map(product=> <ProductCart key={product.cartId}  product={product}/>)}
</>
    );
}
 
export default Cart;