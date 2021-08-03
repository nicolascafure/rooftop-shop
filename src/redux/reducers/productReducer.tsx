
import {IState,IProduct} from "../../interfaces/iShopStore"


type Action= {type:"GET_PRODUCTS_HOME", payload: IProduct[]}
type ActionB= {type:"GET_PRODUCTS_CATALOGO", payload: IProduct[]}


const INITIAL_STATE:IState={
    products: [],
    productsCatalogo:[]
}


export const productReducer=(state=INITIAL_STATE,action: Action|ActionB)=>{
    switch(action.type){
        case "GET_PRODUCTS_HOME":
            return{
                ...state,products:action.payload
            }

            case "GET_PRODUCTS_CATALOGO":
                return{
                    ...state,productsCatalogo:action.payload
                }
    

            default:
                return state
    }
}