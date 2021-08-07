import { addProductsCatalogue, addProductsHome , addQuestions} from "../actions/product"
import axios from "axios"
import { Dispatch } from "redux";
import Swal from 'sweetalert2'



export const fetchProductsHome=()=>{
    return (dispatch:Dispatch)=>{
        axios.get("https://rooftop-api-rest-frontend.herokuapp.com/items?limit=4")
        .then(res=>{
          dispatch(addProductsHome(res.data.items))
        })
        .catch(err=>
          Swal.fire({
            title: err.message,
            text: 'Error al traer los datos del servidor',
            icon: 'error',
            confirmButtonText: 'OK'
          }))
         
}}

export const fetchProductsCatalogue=()=>{
    return (dispatch:Dispatch)=>{
        axios.get("https://rooftop-api-rest-frontend.herokuapp.com/items")
        .then(res=>{
          dispatch(addProductsCatalogue(res.data.items))
        })
        .catch(err=>Swal.fire({
          title: err.message,
          text: 'Error al traer los datos del servidor',
          icon: 'error',
          confirmButtonText: 'OK'}))
}}


export const fetchProductQuestions=(id:string)=>{
    return (dispatch:Dispatch)=>{
        axios
        .get(
          `https://rooftop-api-rest-frontend.herokuapp.com/questions?item_id=${id}`
        )
        .then((res) => {
          dispatch(addQuestions(res.data));
        })
        .catch((err) => Swal.fire({
          title: err.message,
          text: 'Error al traer los datos del servidor',
          icon: 'error',
          confirmButtonText: 'OK'}));
}}
