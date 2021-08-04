import { addProductsCatalogue } from "../redux/actions/product";
import { IProduct,IStore } from "../interfaces/iShopStore";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import Product from "../components/Product";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
export interface CatalogoProps {

}

interface ParamTypes {
  page: string;
}

const Catalogo: React.FunctionComponent<CatalogoProps> = () => {

const dispatch= useDispatch()
const productsCatalogue= useSelector((state :IStore)=>state.shopStore.productsCatalogo)
const { page } = useParams<ParamTypes>()

const getPage=(page:string)=>{
if(Number(page)==1){
   return productsCatalogue.slice(0,6)}else if(Number(page)==2){
   return productsCatalogue.slice(6,13) } else if( Number(page)==3){
    return productsCatalogue.slice(13,20)
   }else {
     return []
   }
}


  useEffect(() => {
    axios.get("https://rooftop-api-rest-frontend.herokuapp.com/items")
   .then(res=>{
     dispatch(addProductsCatalogue(res.data.items))
   })
   .catch(err=>console.log(err.message))

getPage(page)
     }, [dispatch, page])




return(

<div className="container-catalogue">



<h1>Catalogo de productos</h1>
<div className="container-products-catalogue">
{getPage(page).map(product=><Product key={product.id}  product={product}/>)   }
</div>
<div >   
  {Number(page)==1?null: <Link to={`/catalogo/${Number(page)-1}`}>ANTERIOR</Link>}
         <Link to="/catalogo/1">1</Link>
         <Link to="/catalogo/2">2</Link>
         <Link to="/catalogo/3">3</Link>
         {Number(page)==3?null: <Link to={`/catalogo/${Number(page)+1}`}>SIGUIENTE</Link>}
       </div>
</div>



)
}

export default Catalogo