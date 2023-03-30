import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import goodsReducer from "./goodsSlice";
import homeReducer from "./homeSlice";

const rootReducers = combineReducers({
	product: homeReducer,
	cart: cartReducer,
	items: goodsReducer,
});

const store = configureStore({
	reducer: rootReducers,
});
export default store;
