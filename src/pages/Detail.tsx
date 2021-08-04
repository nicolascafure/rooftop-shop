
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
    const dispatch =useDispatch()
const products= useSelector((state :IStore)=>state.shopStore.productsCatalogo)
     const { id } = useParams<ParamTypes>()
     useEffect(() => {
        const product= products.find(product=>product.id===Number(id))
        console.log(products)
     }, [dispatch])

    return (  <>
    


        </>
    );
}
 
export default Detail;