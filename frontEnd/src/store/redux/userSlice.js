import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'user',
	initialState: {
		name: '',
		email: '',
		isLogged: false,
	},
	reducers: {
		changeUser(state, { payload }) {
			return { ...state, isLogged: true, name: payload.name, email: payload.email};
		},
		logout(state) {
			return { ...state, isLogged: false, name: '', email: ''};
		},
		changeEmail(state, { payload }) {
			return { ...state, email: payload }
		}
	},
});

export const { changeUser, logout, changeEmail } = slice.actions;

export const selectUser = (state) => state.user;

export default slice.reducer;
