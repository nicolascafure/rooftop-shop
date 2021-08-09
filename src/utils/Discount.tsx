import { IProduct } from "../interfaces/iShopStore";

const discount = (product: IProduct): number => {
  if (product.offer === null) {
    return 0;
  } else {
    const a = (product.offer.price / Number(product.price)) * 100;
    return 100 - a;
  }
};
export default discount;
