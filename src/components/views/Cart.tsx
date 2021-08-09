import {IStore} from "../../interfaces/iShopStore"
import { useSelector } from "react-redux";
import ProductCart from "../common/ProductCart";

const Cart: React.FunctionComponent = () => {
    const cart= useSelector((state :IStore)=>state.shopStore.productsCart)
    return (  <>
   <div className="flex-center">
    <h1>carrito</h1>
    <div className="container-cart">
{cart.map(product=> <ProductCart key={product.cartId}  product={product}/>)}
</div>
</div>
</>
    );
}
 
export default Cart;