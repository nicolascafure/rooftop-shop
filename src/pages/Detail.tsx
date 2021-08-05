import { IProduct } from "../interfaces/iShopStore";
import {  useParams} from "react-router-dom";
  import { useSelector } from 'react-redux';
  import {IStore} from "../interfaces/iShopStore";
  import ImageGallery from 'react-image-gallery';
  import { useEffect } from "react";
  export interface DetailProps {
    
}

  interface ParamTypes {
    id: string;
  }

 
const Detail: React.FunctionComponent<DetailProps> = () => {
  const { id } = useParams<ParamTypes>()  
const products= useSelector((state :IStore)=>state.shopStore.productsCatalogo)
     const product=  (products.find(product=>product.id===Number(id)))

const transformarImg=(imagenes:Array<string>)=>{
  const images = [
    {
      original: imagenes[0]   ,
      thumbnail:imagenes[0],
    },
    {
      original: imagenes[1],
      thumbnail:imagenes[1],
    },
    {
      original: imagenes[2],
      thumbnail:imagenes[2],
    },
  ];
  return images
}

const descuento=(product:IProduct) :number=>{
  if(product.offer===null){
    return 0}else{
      const a = product.offer.price / Number(product.price) *100
      return 100- a
    }
  }



    return (  <>
    {product !==undefined ? 
    <div className="flex-center">
    <div className="container-detail">
    <div className="detail-img">
    <ImageGallery items={transformarImg(product.images)} />
    </div>
      <div className="detail-data">
    <h1>{product.title}</h1>
    {product.offer === null ? (
          <p className="price">{product.currency} {product.price}</p>
     
      ) : (<>
          <p className="price-offer">{product.currency} {product.offer.price}</p>
          <p className="last-price">{product.currency} {product.price}</p>
          <p>{descuento(product)}% OFF</p>
  </>
      )}

    </div>
   
    
    
    </div>
    </div>
    :null}


        </>
    );
}
 
export default Detail;