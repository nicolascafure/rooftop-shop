import {IProduct, IQuestion} from "../../interfaces/iShopStore"

export const addProductsHome = (products : IProduct[])=>{
return{
    type: "GET_PRODUCTS_HOME",
    payload: products
  }
}

export const addProductsCatalogue = (productsCatalogue : IProduct[])=>{
  return{
      type: "GET_PRODUCTS_CATALOGUE",
      payload: productsCatalogue
    }
  }


  export const addQuestions = (questions : IQuestion[])=>{
    return{
        type: "GET_PRODUCT_QUESTIONS",
        payload: questions
      }
    }

    export const filterProducts = (e:string)=>{
      return{
        type: "FILTER_PRODUCTS",
        payload: e
      }
    }