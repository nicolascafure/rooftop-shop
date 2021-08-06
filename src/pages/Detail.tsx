import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStore } from "../interfaces/iShopStore";
import ImageGallery from "react-image-gallery";
import ImgTransform from "../utils/ImgTransform";
import timeTo from "../utils/TimeTo";
import discount from "../utils/Discount";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addQuestions } from "../redux/actions/product";
import Question from "../components/Question";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
 email: string,
  message: string,
};

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
    axios
      .get(
        `https://rooftop-api-rest-frontend.herokuapp.com/questions?item_id=${id}`
      )
      .then((res) => {
        dispatch(addQuestions(res.data));
        console.log(questions);
      })
      .catch((err) => console.log(err.message));
  }, [dispatch]);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
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
          <div className="container-questions">
            {questions.map((question, index) => <Question key={index} question={question} />)}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
          <label>Ingresa tu email</label>
      <input
        type="text"
        {...register("email", {
          required: true,
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })}
      />
  {errors.email?.type === 'required' && "El campo de email es requerido."}
  {errors.email?.type === 'patterm' && "Ingrese un email valido."}
  
      <textarea placeholder="Escribi tu pregunta..."  {...register("message", { required: true,maxLength: 500 , minLength:10 })} />
      {errors.message?.type === 'required' && "El campo de mensaje es requerido."}
      {errors.message?.type === 'maxLength' && "El mensaje no puede superar los 500 caracteres."}
      {errors.message?.type === 'minLength' && "El mensaje debe tener un minimo de 10 caracteres."}
      

      
      <input type="submit" />
    </form>



        </div>
      ) : null}
    </>
  );
};

export default Detail;
