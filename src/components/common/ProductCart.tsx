import { IProductCart } from "../../interfaces/iShopStore";
import { deleteProductCart } from "../../redux/actions/product";
import { useDispatch } from "react-redux";
export interface ProductCartProps {
  product: IProductCart;
}

const ProductCart: React.FunctionComponent<ProductCartProps> = ({
  product,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="container-product-cart">
      <div className="product-cart-img">
        <img src={product.images[0]} alt="product"></img>
      </div>
      <div className="product-cart-data">
        <h3 className="product-cart-title">{product.title}</h3>
        {product.offer === null ? (
          <p className="price-cart">
            {product.currency} {product.price}
          </p>
        ) : (
          <p className="price-cart">
            {product.currency} {product.offer.price}
          </p>
        )}
        <button
          onClick={() => dispatch(deleteProductCart(product.cartId))}
          className="delete-product"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
