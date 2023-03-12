import { createReducer, on } from '@ngrx/store';
import {
  getCategoriesAction,
  getCategoriesActionSuccess,
} from '../actions/categories.actions';

export const initialState: string[] = [] as string[];

export const categoriesReducer = createReducer(
  initialState,
  on(getCategoriesAction, (state) => state),
  on(getCategoriesActionSuccess, (state, data: any) => {
    return [...state, ...data.payload];
  })
);
