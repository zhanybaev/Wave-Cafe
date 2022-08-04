export interface product{
    id: number,
    title: string,
    type: string,
    image: string,
    description: string,
    price: number,
    comments: any[],
}


export interface coffeeState{
    coffees:product[],
    edit: any,
    detail:any
}


export enum CoffeeActionTypes{
    GET_PRODUCTS='GET_PRODUCTS',
    EDIT_PRODUCTS='EDIT_PRODUCTS',
    GET_DETAIL='GET_DETAIL'
}

interface GetProductsAction{
    type: CoffeeActionTypes.GET_PRODUCTS;
    payload: product[]
}

interface EditProductsAction{
    type: CoffeeActionTypes.EDIT_PRODUCTS;
    payload: product
}

interface GetProductDetail{
    type: CoffeeActionTypes.GET_DETAIL;
    payload: product
}

export type ProductAction = GetProductsAction | EditProductsAction | GetProductDetail