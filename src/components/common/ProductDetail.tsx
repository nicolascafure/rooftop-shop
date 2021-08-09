import { IProduct } from "../../interfaces/iShopStore";
import ImageGallery from "react-image-gallery";
import ImgTransform from "../../utils/ImgTransform";
import { timeTo } from "../../utils/Time";
import discount from "../../utils/Discount";
import { dateOffer } from "../../utils/Time";
import { addToCart } from "../../redux/actions/product";
import { useDispatch } from "react-redux";

export interface ProductDetailProps {
  product: IProduct;
}

const ProductDetail: React.FunctionComponent<ProductDetailProps> = ({
  product,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="container-detail">
      <div className="detail-img">
        <ImageGallery
          showPlayButton={false}
          items={ImgTransform(product.images)}
        />
      </div>
      <div className="detail-data">
        <h1>{product.title}</h1>
        {product.offer === null ? (
          <p className="price">
            {product.currency} {product.price}
          </p>
        ) : (
          <>
            <p className="price-offer">
              {product.currency} {product.offer.price}
            </p>
            <p className="last-price">
              {product.currency} {product.price}
            </p>
            <p>{discount(product)}% OFF</p>
            <p>
              Offer expires in {timeTo(product)} at {dateOffer(product)}
            </p>
          </>
        )}

        <button
          className="button-add-to-cart"
          onClick={() => dispatch(addToCart(product))}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
