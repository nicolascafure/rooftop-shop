import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces/iShopStore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Question from "../common/Question";
import { fetchProductQuestions } from "../../redux/services/productServices";
import Form from "../common/Form";
import ProductDetail from "../common/ProductDetail"


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
          
          <ProductDetail product={product}/>

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
