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
        
      <img src={product.images[1]}></img>
      <h1>{product.title}</h1>
      {product.offer === null ? (
        <div className="none-offer">
          <p>{product.price}</p>
        </div>
      ) : (
        <div className="offer">
         <p>{product.price}</p>
          <p>{product.offer.price}</p>
          <p>{descuento(product)}% OFF</p>
        </div>
      )}
    </div>
  );
}

export default Product;
