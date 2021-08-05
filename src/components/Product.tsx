import { IProduct } from "../interfaces/iShopStore";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import discount from "../utils/Discount";
export interface ProductProps {
  product: IProduct;
  key: number;
}

const Product: React.FunctionComponent<ProductProps> = ({ product }) => {

  return (
    <Link to={`/detail/${product.id}`}>
    <div className="product">
       <div className= "container-product-img">
      <img src={product.images[1]}></img>
      </div> 
      {product.offer === null ? (
        <div className="offer">
          <p className="price">{product.currency} {product.price}</p>
        </div>
      ) : (
        <div className="offer">
        
          <p className="price-offer">{product.currency} {product.offer.price}</p>
          <p className="last-price">{product.currency} {product.price}</p>
          <p>{discount(product)}% OFF</p>
        </div>
      )}
         <h3 className="product-title">{product.title}</h3>
    </div>
    </Link>
  );
}

export default Product;
