import { IProduct } from "../interfaces/iShopStore";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStore } from "../interfaces/iShopStore";
import ImageGallery from "react-image-gallery";
import ImgTransform from "../utils/ImgTransform";
import timeTo from "../utils/TimeTo";
import discount from "../utils/Discount";


export interface DetailProps {}

interface ParamTypes {
  id: string;
}

const Detail: React.FunctionComponent<DetailProps> = () => {
  const { id } = useParams<ParamTypes>();
  const products = useSelector(
    (state: IStore) => state.shopStore.productsCatalogo
  );
  const product = products.find((product) => product.id === Number(id));



  return (
    <>
      {product !== undefined ? (
        <div className="flex-center">
          <div className="container-detail">
            <div className="detail-img">
              <ImageGallery items={ImgTransform(product.images)} />
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
                  <p>Offer expires in {timeTo(product)}</p>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Detail;
