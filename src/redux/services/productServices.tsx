import { addProductsCatalogue, addProductsHome } from "../actions/product"
import axios from "axios"
import { Dispatch } from "redux";


export const fetchProductsHome=()=>{
    return (dispatch:Dispatch)=>{
        axios.get("https://rooftop-api-rest-frontend.herokuapp.com/items?limit=4")
        .then(res=>{
          dispatch(addProductsHome(res.data.items))
        })
        .catch(err=>console.log(err.message))
}}

export const fetchProductsCatalogue=()=>{
    return (dispatch:Dispatch)=>{
        axios.get("https://rooftop-api-rest-frontend.herokuapp.com/items")
        .then(res=>{
          dispatch(addProductsCatalogue(res.data.items))
        })
        .catch(err=>console.log(err.message))
}}