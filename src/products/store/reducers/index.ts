import * as fromPizza from "./pizzas.reducers";
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface ProductsState {
  pizzas: fromPizza.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizza.reducer
}

export const getProductState = createFeatureSelector<ProductsState>('products');

//pizza state
export const getPizzaState = createSelector(getProductState,(state: ProductsState) => state.pizzas);

export const getAllPizzas =  createSelector(getPizzaState, fromPizza.getPizzasEntites);
export const getPizzasLoaded =  createSelector(getPizzaState, fromPizza.getPizzasLoaded);
export const getPizzasLoading =  createSelector(getPizzaState, fromPizza.getPizzasLoading);

