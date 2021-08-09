import {IStore} from "../../interfaces/iShopStore"
import { useSelector } from "react-redux";
import ProductCart from "../common/ProductCart";

const Cart: React.FunctionComponent = () => {

    
    const cart= useSelector((state :IStore)=>state.shopStore.productsCart)
    return (  <>
   <div className="flex-center">
   {cart.length===0?<h2>No hay productos en el carrito</h2>:
  <> <h2>Carrito de compras</h2>
    <div className="container-cart">
{cart.map(product=> <ProductCart key={product.cartId}  product={product}/>)}
</div> 
<button>Comprar</button>
</>} 
</div>
</>
    );
}
 
export default Cart;