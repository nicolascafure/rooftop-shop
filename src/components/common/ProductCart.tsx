import { IProductCart } from "../../interfaces/iShopStore";
export interface ProductCartProps {
    product: IProductCart
}
 
const ProductCart: React.FunctionComponent<ProductCartProps> = ({product}) => {
    return ( 
<div className= "container-product-cart">
<div className="product-cart-img">
<img src={product.images[0]}></img>
</div>
<div className="product-cart-data">
<h3 className="product-title">{product.title}</h3>
{product.offer === null ? (
 <div className="offer">
   <p className="price">{product.currency} {product.price}</p>
 </div>
) : (
 <div className="offer">
   <p className="price">{product.currency} {product.offer.price}</p>
 </div>
)}
</div>
</div>









     );
}
 
export default ProductCart;