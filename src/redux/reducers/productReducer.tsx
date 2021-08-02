
import {IState,IProduct} from "../../interfaces/iShopStore"


type Action= {type:"GET_PRODUCTS", payload: object[]}

const INITIAL_STATE:IState={
    products: []
}


export const productReducer=(state=INITIAL_STATE,action: Action)=>{
    switch(action.type){
        case "GET_PRODUCTS":
            return{
                ...state
            }
            default:
                return state
    }
}