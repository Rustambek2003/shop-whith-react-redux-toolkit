import { createSlice } from "@reduxjs/toolkit";

const cartState = {
	cart: [],
	count: 1,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: cartState,
	reducers: {
		addToCart(state, action) {
			const newItem = {
				...action.payload,
				count: 1,
			};
			const hasInCart = state.cart.find(el => el.id === newItem.id);
			if (hasInCart) {
				++hasInCart.count;
			} else {
				state.cart.push(newItem);
			}
		},
		inCount(state, action) {},
		disCount(state, action) {
			state.count = state.count + 1;
		},
		removeInCart(state, action) {
			state.cart = state.cart.filter(arrow => arrow.id !== action.payload);
		},
	},
});
export const { addToCart, removeInCart, inCount, disCount } = cartSlice.actions;
export default cartSlice.reducer;
