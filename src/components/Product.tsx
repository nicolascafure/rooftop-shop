import { IProduct } from "../interfaces/iShopStore";
export interface ProductProps {
  product: IProduct;
  key: number;
}

const Product: React.FunctionComponent<ProductProps> = ({ product }) => {
 const descuento=(product:IProduct) :number=>{
if(product.offer===null){
  return 0}else{
    const a = product.offer.price / Number(product.price) *100
    return 100- a
  }
}
  return (
    <div className="product">
       <div className= "container-product-img">
      <img src={product.images[1]}></img>
      </div> 
      {product.offer === null ? (
        <div className="offer">
          <p className="price">{product.currency} {product.price}</p>
        </div>
      ) : (
        <div className="offer">
        
          <p className="price-offer">{product.currency} {product.offer.price}</p>
          <p className="last-price">{product.currency} {product.price}</p>
          <p>{descuento(product)}% OFF</p>
        </div>
      )}
         <h3 className="product-title">{product.title}</h3>
    </div>
  );
}

export default Product;
