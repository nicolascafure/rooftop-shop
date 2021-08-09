
import {IState,IProduct, IQuestion} from "../../interfaces/iShopStore"


type Action= {type:"GET_PRODUCTS_HOME", payload: IProduct[]}
type ActionB= {type:"GET_PRODUCTS_CATALOGUE", payload: IProduct[]}
type ActionC={type:"GET_PRODUCT_QUESTIONS" ,payload:IQuestion[]}
type ActionD= {type:"FILTER_PRODUCTS" , payload:string}




const INITIAL_STATE:IState={
    products: [],
    productsCatalogo:[],
    questions:[],
    productsFilter:[],
    searching: false
}


export const productReducer=(state=INITIAL_STATE,action: Action|ActionB|ActionC|ActionD)=>{
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

              case "FILTER_PRODUCTS":
                let newProducts =  state.productsCatalogo.filter(product=> product.title.includes(action.payload))
                    return{
                        ...state,productsFilter:newProducts,searching :true
                    }
            default:
                return state
    }
}