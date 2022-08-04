import { ProductAction, coffeeState, CoffeeActionTypes, } from "../../types/coffee";

const initialState: coffeeState = {
    coffees: [],
    edit: {
        id: 0,
        title: '',
        type: '',
        image: '',
        description: '',
        price: 0,
        comments: [],
    },
    detail:{}
}

export const productReducer = (state = initialState, action: ProductAction):coffeeState=>{
    switch (action.type){
        case CoffeeActionTypes.GET_PRODUCTS:
            return {...state, coffees: action.payload}
        case CoffeeActionTypes.EDIT_PRODUCTS:
            return {...state, edit: action.payload}
        case CoffeeActionTypes.GET_DETAIL:
            return {...state, detail: action.payload}
        default:
            return state
    }
}