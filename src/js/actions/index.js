import { ADD_ARTICLE, DATA_LOADED } from '../constants/action-types';

export function addArticle(payload) {
	return { type: ADD_ARTICLE, payload };
}

// our new action creator. Will it work? it will not work
export function getDataWithoutThunk() {
	return fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(json => {
			return { type: 'DATA_LOADED', payload: json };
		});
}
// this will work, as this is redux-thunk - after rechanded name back to getData()
export function getDataThunk() {
	return function (dispatch) {
		return fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => {
				dispatch({ type: DATA_LOADED, payload: json });
			});
	};
}


export function getData() {
  return { type: "DATA_REQUESTED" };
} 