
import {IState,IProduct} from "../../interfaces/iShopStore"


type Action= {type:"GET_PRODUCTS_HOME", payload: IProduct[]}

const INITIAL_STATE:IState={
    products: []
}


export const productReducer=(state=INITIAL_STATE,action: Action)=>{
    switch(action.type){
        case "GET_PRODUCTS_HOME":
            return{
                ...state,products:action.payload
            }
            default:
                return state
    }
}