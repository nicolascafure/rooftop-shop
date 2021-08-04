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



    return (  <>
    {product !==undefined ? 
    <div className="container-detail">
    <h1>{product.title}</h1>
    <div className="detail-img">
    <ImageGallery items={transformarImg(product.images)} />
    </div>
    
    
    </div>
    :null}


        </>
    );
}
 
export default Detail;