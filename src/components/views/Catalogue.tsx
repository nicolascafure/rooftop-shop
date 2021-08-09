
import { IStore } from "../../interfaces/iShopStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "../common/Product";
import {
  Link,
  useParams
} from "react-router-dom";
import {filterProducts} from "../../redux/actions/product"
import {useDispatch} from "react-redux"


interface ParamTypes {
  page: string;
}

const Catalogo: React.FunctionComponent = () => {

const productsCatalogue= useSelector((state :IStore)=>state.shopStore.productsCatalogo)
const productosFiltrados =useSelector((state :IStore)=>state.shopStore.productsFilter)
const { page } = useParams<ParamTypes>()
const dispatch = useDispatch()

const getPage=(page:string)=>{
  const ProductsPerPage =6
  const sliceTo = ProductsPerPage* Number(page)
  const sliceFrom = sliceTo -ProductsPerPage
  if(productosFiltrados.length===0){
    return productsCatalogue.slice(sliceFrom,sliceTo)
  }else{
return(productosFiltrados.slice(sliceFrom,sliceTo))
}}

  useEffect(() => {
getPage(page)
     })

 const SearchWithText=(e:React.ChangeEvent<HTMLInputElement>)=>{
dispatch(filterProducts(e.target.value))
 }

const pageNumber=[1,2,3,4,5,6,7,8,9]
return(

<div className="container-catalogue">
<h1>Catalogo de productos</h1>
<input  onInput={SearchWithText}/>
<div className="container-products-catalogue">
{getPage(page).map(product=><Product key={product.id}  product={product}/>)   }
</div>
<div className="pagination" >   
  {Number(page)===1?null: <Link className="button-pagination" to={`/catalogo/${Number(page)-1}`}>{"<"}</Link>}
{pageNumber.map(number=><Link key={number}
 className={Number(page)===number? "selected-page":"page"}  to={`/catalogo/${number}`}>{number}</Link>)}
         {Number(page)===9?null: <Link className="button-pagination" to={`/catalogo/${Number(page)+1}`}>{">"}</Link>}
       </div>
</div>



)
}

export default Catalogo