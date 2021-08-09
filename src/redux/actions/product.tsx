import {IProduct, IQuestion} from "../../interfaces/iShopStore"
import { v4 as uuidv4 } from 'uuid';

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

    export const addToCart=(product:IProduct)=>{
      let newProductCart = {
        ...product, 
        cartId: uuidv4()
      }
      return{
        type: "ADD_PRODUCT_TO_CART",
        payload: newProductCart
      }
      
        }

        export const deleteProductCart=(id:string)=>{
          return{
            type: "DELETE_PRODUCT_CART",
            payload: id
          }
        
            }
    
            export const resetCart=()=>{
              return{
                type: "RESET_CART",
              }
                }

            