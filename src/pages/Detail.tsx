export interface DetailProps {
    
}
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import { useSelector } from 'react-redux';
  import {IStore} from "../interfaces/iShopStore";
  import { useDispatch } from 'react-redux';

  interface ParamTypes {
    id: string;
  }

 
const Detail: React.FunctionComponent<DetailProps> = () => {
    const dispatch =useDispatch()
const products= useSelector((state :IStore)=>state.shopStore.productsCatalogo)
     const { id } = useParams<ParamTypes>()
    const product= products.find(product=>product.id===Number(id))
    return (  <>
      {product.title}


        </>
    );
}
 
export default Detail;