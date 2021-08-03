import {IProduct} from "../../interfaces/iShopStore"

export const addProductsHome = (products : IProduct)=>{
return{
    type: "GET_PRODUCTS_HOME",
    payload: products
  }
}

export const addProductsCatalogue = (products : IProduct)=>{
  return{
      type: "GET_PRODUCTS_CATALOGO",
      payload: products
    }
  }

