
import { IStore } from "../../interfaces/iShopStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "../common/Product";
import {
  Link,
  useParams
} from "react-router-dom";


interface ParamTypes {
  page: string;
}

const Catalogo: React.FunctionComponent = () => {

const productsCatalogue= useSelector((state :IStore)=>state.shopStore.productsCatalogo)
const { page } = useParams<ParamTypes>()

const getPage=(page:string)=>{
  const ProductsPerPage =6
  const sliceTo = ProductsPerPage* Number(page)
  const sliceFrom = sliceTo -ProductsPerPage
return(productsCatalogue.slice(sliceFrom,sliceTo))
}
  useEffect(() => {
getPage(page)
console.log("cargo la page")
     })

return(

<div className="container-catalogue">
<h1>Catalogo de productos</h1>
<div className="container-products-catalogue">
{getPage(page).map(product=><Product key={product.id}  product={product}/>)   }
</div>
<div >   
  {Number(page)==1?null: <Link to={`/catalogo/${Number(page)-1}`}>ANTERIOR</Link>}
          <Link className={page==="1"? "selected-page":"page"}  to="/catalogo/1">1</Link>
         <Link className={page==="2"? "selected-page":"page"} to="/catalogo/2">2</Link>
         <Link className={page==="3"? "selected-page":"page"} to="/catalogo/3">3</Link>
         {Number(page)==3?null: <Link to={`/catalogo/${Number(page)+1}`}>SIGUIENTE</Link>}
       </div>
</div>



)
}

export default Catalogo