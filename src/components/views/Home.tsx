import ImageGallery from 'react-image-gallery';
import Banner from '../../utils/Banner';
import {shuffle} from 'underscore';
import { useSelector } from 'react-redux';
import {IStore} from "../../interfaces/iShopStore"
import Product from '../common/Product';
 
const Home: React.FunctionComponent = () => {

    const productsHome= useSelector((state :IStore)=>state.shopStore.products)
    return (  <>
        <ImageGallery items={Banner} showFullscreenButton={false}  showPlayButton={false}  autoPlay={true}  slideDuration={2500} slideInterval={6000}/>
<div className="center">
        <div className="container-products-home">
        {shuffle(productsHome).map(product=><Product key={product.id}  product={product}/>)   }
        </div>
        </div>
</>
        
    );
}
 
export default Home;