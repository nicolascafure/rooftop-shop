import {IStore} "../../interfaces/iShopStore"
import { useSelector } from "react-redux";

const Cart: React.FunctionComponent = () => {
    const cart= useSelector((state :IStore)=>state.shopStore.productCart)
    return (  <>
{cart.length===0?<p>No hay productos en el carrito</p>:
<p>hay productos</p>
}
</>
    );
}
 
export default Cart;