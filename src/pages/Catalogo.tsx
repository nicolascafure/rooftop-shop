import { addProductsCatalogue } from "../redux/actions/product";
import { IProduct,IStore } from "../interfaces/iShopStore";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
export interface CatalogoProps {

}

const Catalogo: React.FunctionComponent<CatalogoProps> = () => {

const dispatch= useDispatch()
const productsCatalogue= useSelector((state :IStore)=>state.shopStore.productsCatalogo)
console.log(productsCatalogue)

  useEffect(() => {
    axios.get("https://rooftop-api-rest-frontend.herokuapp.com/items")
   .then(res=>{
     dispatch(addProductsCatalogue(res.data.items))
   })
   .catch(err=>console.log(err.message))
     }, [dispatch])




return(

<div className="container-catalogo">



<h1>Catalogo de productos</h1>


</div>



)
}

export default Catalogo