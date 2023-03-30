import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const homeState = {
	products: [],
	status: "",
};
export const getGoods = createAsyncThunk("home/getGoods", async () => {
	const response = await fetch("https://fakestoreapi.com/products");
	const goodsData = await response.json();
	return goodsData;
});
const homeSlice = createSlice({
	name: "home",
	initialState: homeState,
	extraReducers: {
		[getGoods.pending]: (state, action) => {
			state.status = "pending";
		},
		[getGoods.fulfilled]: (state, action) => {
			state.products = action.payload;
		},
		[getGoods.rejected]: (state, action) => {},
	},
});
export default homeSlice.reducer;
