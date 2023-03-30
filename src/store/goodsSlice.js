import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const itemsState = {
	goods: [],
	status: "",
};
export const getItem = createAsyncThunk("goods/getItem", async () => {
	const query = await fetch("https://fakestoreapi.com/products");
	const dataItem = await query.json();
	return dataItem;
});
const goodsSlice = createSlice({
	name: "goods",
	initialState: itemsState,
	extraReducers: {
		[getItem.pending]: (state, action) => {
			state.status = "pending";
		},
		[getItem.fulfilled]: (state, action) => {
			state.goods = action.payload;
		},
		[getItem.rejected]: (state, action) => {},
	},
});

export default goodsSlice.reducer;
