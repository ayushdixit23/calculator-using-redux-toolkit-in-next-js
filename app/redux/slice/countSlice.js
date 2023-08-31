import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
	name: "counter",
	initialState: {
		value: 1,
	},
	reducers: {
		add(state, action) {
			state.value += 1
		},
		sub(state, action) {
			state.value -= 1
		},
		addByAmount(state, action) {
			state.value += action.payload
		},
		minusByAmount(state, action) {
			state.value -= action.payload
		},
		multiply(state, action) {
			state.value *= action.payload
		},
		divide(state, action) {
			state.value /= action.payload
		},

	}
})

export default countSlice.reducer

export const { add, sub, minusByAmount, addByAmount, multiply, divide } = countSlice.actions