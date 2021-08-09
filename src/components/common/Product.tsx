import { IProduct } from "../../interfaces/iShopStore";
import { Link } from "react-router-dom";
import discount from "../../utils/Discount";
export interface ProductProps {
  product: IProduct;
  key: number;
}

const Product: React.FunctionComponent<ProductProps> = ({ product }) => {
  return (
    <Link to={`/detail/${product.id}`} className="none">
      <div className="product">
        <div className="container-product-img">
          <img src={product.images[1]} alt="product"></img>
          {product.offer === null ? null : (
            <p className="discount">{discount(product)}% OFF</p>
          )}
        </div>
        {product.offer === null ? (
          <div className="offer">
            <p className="price">
              {product.currency} {product.price}
            </p>
          </div>
        ) : (
          <div className="offer">
            <p className="price-offer">
              {product.currency} {product.offer.price}
            </p>
            <p className="last-price">
              {product.currency} {product.price}
            </p>
          </div>
        )}
        <h3 className="product-title">{product.title}</h3>
      </div>
    </Link>
  );
};

export default Product;
