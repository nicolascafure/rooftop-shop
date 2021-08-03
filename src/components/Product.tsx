import { IProduct } from "../interfaces/iShopStore";
export interface ProductProps {
    product : IProduct,
    key: number

    
}
 
const Product: React.FunctionComponent<ProductProps> = ({product}) => {

    return (  
<div>   
    <img src={product.images[1]}></img>
<h1>{product.title}</h1>
<p>{product.price}</p>

</div>
    )
}
 
export default Product;