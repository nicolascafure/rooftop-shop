
import {IState,IProduct, IQuestion,IProductCart} from "../../interfaces/iShopStore"


type Action= {type:"GET_PRODUCTS_HOME", payload: IProduct[]}
type ActionB= {type:"GET_PRODUCTS_CATALOGUE", payload: IProduct[]}
type ActionC={type:"GET_PRODUCT_QUESTIONS" ,payload:IQuestion[]}
type ActionD= {type:"FILTER_PRODUCTS" , payload:string}
type ActionE= {type:"ADD_PRODUCT_TO_CART" , payload:IProductCart}
type ActionF={ type:"DELETE_PRODUCT_CART" ,payload:string}
type ActionH={ type:"RESET_CART" }




const INITIAL_STATE:IState={
    products: [],
    productsCatalogo:[],
    questions:[],
    productsFilter:[],
    searching: false,
    productsCart:[]
}


export const productReducer=(state=INITIAL_STATE,action: Action|ActionB|ActionC|ActionD|ActionE|ActionF|ActionH)=>{
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

            case "ADD_PRODUCT_TO_CART":
                return{
                    ...state,productsCart: [...state.productsCart,action.payload]
                }
            case "DELETE_PRODUCT_CART":
                const newCart= state.productsCart.filter(product=> product.cartId !== action.payload)
                    return{...state,productsCart:newCart}
                
                    case "RESET_CART":
                            return{...state,productsCart:[]}
            default:
                return state
    }
}