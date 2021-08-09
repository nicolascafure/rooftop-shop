
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
const searching =useSelector((state :IStore)=>state.shopStore.searching)

const { page } = useParams<ParamTypes>()
const dispatch = useDispatch()


const getPage=(page:string)=>{
  const ProductsPerPage =6
  const sliceTo = ProductsPerPage* Number(page)
  const sliceFrom = sliceTo -ProductsPerPage

  if(searching===false){
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

<div className="container-products-catalogue">
<input className="search-bar" placeholder="Buscar productos.." onInput={SearchWithText}/>
{searching===true && productosFiltrados.length===0?<div className="non-results"> <p>...No hay productos que coincidan con tu busqueda</p><ul><li>Revisá la ortografía de la palabra.</li><li>Revisá mayusculas y minusculas</li></ul></div>:null}


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