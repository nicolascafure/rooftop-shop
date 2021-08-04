import {IProduct} from "../../interfaces/iShopStore"

export const addProductsHome = (products : IProduct)=>{
return{
    type: "GET_PRODUCTS_HOME",
    payload: products
  }
}

export const addProductsCatalogue = (productsCatalogue : IProduct)=>{
  return{
      type: "GET_PRODUCTS_CATALOGUE",
      payload: productsCatalogue
    }
  }


