import axios from "axios"
import { Dispatch } from "react"
import { CoffeeActionTypes, ProductAction } from "../../types/coffee"
const API = 'http://localhost:8000/products';

export const getProducts = (history:any)=>{
    return async (dispatch: Dispatch <ProductAction> )=>{
        try {
            // const search = new URLSearchParams(history.location.search);
            // history.push(`${history.location.pathname}?${search.toString()}`);
            const response = await axios(`${API}/${window.location.search}`);
            dispatch({type: CoffeeActionTypes.GET_PRODUCTS, payload: response.data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const editProducts = (id:number|string)=>{
    return async (dispatch: Dispatch<ProductAction>)=>{
        try {
            const { data } = await axios.get(`${API}/${id}`)
            console.log(data);
            dispatch({type: CoffeeActionTypes.EDIT_PRODUCTS, payload:data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const productDetail = (id:string|number)=>{
    return async (dispatch: Dispatch<ProductAction>) =>{
        try {
            const { data } = await axios.get(`${API}/${id}`)
            dispatch({type: CoffeeActionTypes.GET_DETAIL, payload: data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const saveEdited = async(editedProduct:any)=>{
    try {
        console.log(editedProduct);
        await axios.patch(`${API}/${editedProduct.id}`, editedProduct)
    } catch (error) {
        console.log(error);
    }
}
