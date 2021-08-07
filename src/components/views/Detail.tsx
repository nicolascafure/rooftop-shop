import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces/iShopStore";
import ImageGallery from "react-image-gallery";
import ImgTransform from "../../utils/ImgTransform";
import {timeTo} from "../../utils/Time"
import discount from "../../utils/Discount";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Question from "../common/Question";
import { fetchProductQuestions } from "../../redux/services/productServices";
import Form from "../common/Form";
import{dateOffer} from "../../utils/Time";



interface ParamTypes {
  id: string;
}

const Detail: React.FunctionComponent = () => {
  const { id } = useParams<ParamTypes>();
  const dispatch = useDispatch();

  const products = useSelector(
    (state: IStore) => state.shopStore.productsCatalogo
  );

  const questions = useSelector((state: IStore) => state.shopStore.questions);

  const product = products.find((product) => product.id === Number(id));

  useEffect(() => {
    dispatch(fetchProductQuestions(id));
  }, [dispatch, id]);

 

  return (
    <>
      {product !== undefined ? (
        <div className="flex-center">
          <div className="container-detail">
            <div className="detail-img">
              <ImageGallery  showPlayButton={false}  items={ImgTransform(product.images)} />
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
                  <p>Offer expires in {timeTo(product)} at {dateOffer(product)}</p>
                  <button onClick={()=>console.log(dateOffer(product))}></button>
                </>
              )}
            </div>
          </div>
          

          <div className="container-questions">
          <h2>Preguntas y respuestas</h2>
          <Form id = {id} />
           {questions.length===0 ? null:<h3>Últimas realizadas</h3>}
            {questions.map((question, index) => (
              <Question key={index} question={question} />
            ))}
          </div>

          



        </div>
      ) : null}
    </>
  );
};

export default Detail;
