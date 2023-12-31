import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { allProductsReducer } from './reducers/allProductsReducer';


const rootReducer = combineReducers({
categories: categoriesReducer,
productsByCategory : productsByCategoryReducer,
allProducts: allProductsReducer
})

const createStoreWithMiddleware = applyMiddleware(thunk, logger);
export const store = createStore(rootReducer, createStoreWithMiddleware);
