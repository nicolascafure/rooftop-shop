
const INITIAL_STATE={
    products: []
}


export const productReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "GET_PRODUCTS":
            return{
                ...state
            }
            default:
                return{
                    state
                }
    }
}