
import {IState,IProduct, IQuestion} from "../../interfaces/iShopStore"


type Action= {type:"GET_PRODUCTS_HOME", payload: IProduct[]}
type ActionB= {type:"GET_PRODUCTS_CATALOGUE", payload: IProduct[]}
type ActionC={type:"GET_PRODUCT_QUESTIONS" ,payload:IQuestion[]}



const INITIAL_STATE:IState={
    products: [],
    productsCatalogo:[],
    questions:[]
}


export const productReducer=(state=INITIAL_STATE,action: Action|ActionB|ActionC)=>{
    switch(action.type){
        case "GET_PRODUCTS_HOME":
            return{
                ...state,products:action.payload
            }

            case "GET_PRODUCTS_CATALOGUE":
                return{
                    ...state,productsCatalogo:action.payload
                }
    
                case "GET_PRODUCT_QUESTIONS":
                    return{
                        ...state,questions:action.payload
                    }


            default:
                return state
    }
}