import { fetchAddTodos } from '../api';

export const addTodosAction = () => {
	return (dispatch) => {
		return fetchAddTodos().then((todo) => {
			dispatch({ type: 'ADD_TODO', payload: todo });
		});
	};
};
