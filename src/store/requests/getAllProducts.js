import { loadAllProductsAction } from '../reducers/allProductsReducer'

export const getAllProducts = dispatch => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => dispatch(loadAllProductsAction(json)))
    }

