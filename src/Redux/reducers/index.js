"use client";

import { combineReducers } from 'redux';
import cartDataReducer from '../CartData/cartDataSlice';
import productDataReducer from '../Products/productDataSlice';
import { networkReducer } from '../Network/networkSlice';
import { pagesContentReducer } from '../PagesContent/PagesContentSlice';
import { categoriesReducer } from '../Categories/categoriesSlice';


const rootReducer = combineReducers({
    cartData: cartDataReducer,
    productData: productDataReducer,
    network: networkReducer,
    pagesContent: pagesContentReducer,
    categories: categoriesReducer,
});

export default rootReducer;
