import { configureStore, getDefaultMiddleware, createSlice } from '@reduxjs/toolkit';

const middleware = [
	...getDefaultMiddleware(),
	/*YOUR CUSTOM MIDDLEWARES HERE*/
];

// AUTH STATE
const authState = {
	token: '',
	error: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState: authState,
	reducers: {
		loginSuccess: (state, action) => {
			state.token = action.payload;
		},
		loginFailed: (state, action) => {
			state.error = action.payload;
		},
	},
});

const { loginSuccess, loginFailed } = authSlice.actions;

const authReducer = authSlice.reducer;

const store2 = configureStore({
	reducer: {
		auth: authReducer,
	},
	middleware,
});
