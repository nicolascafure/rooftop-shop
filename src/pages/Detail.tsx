
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
  import { useEffect } from "react";
  export interface DetailProps {
    
}

  interface ParamTypes {
    id: string;
  }

 
const Detail: React.FunctionComponent<DetailProps> = () => {
  const { id } = useParams<ParamTypes>()  
  const dispatch =useDispatch()
const products= useSelector((state :IStore)=>state.shopStore.productsCatalogo)
     const product= products.find(product=>product.id===Number(id))

    return (  <>
    {product !==undefined ? <h1>{product.title}</h1>:null}


        </>
    );
}
 
export default Detail;