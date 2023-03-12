import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';
import {
  getProductsAction,
  getProductsActionSuccess,
} from '../actions/products.actions';

export const initialState: Product[] = [] as Product[];

export const productsReducer = createReducer(
  initialState,
  on(getProductsAction, (state) => state),
  on(getProductsActionSuccess, (state, data: any) => {
    return [...state, ...data.payload];
  })
);
