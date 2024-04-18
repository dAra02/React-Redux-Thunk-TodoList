import { fetchUpdateTodos } from '../api';

export const updateTodo = () => {
	return (dispatch) => {
		return fetchUpdateTodos().then((todo) => {
			dispatch({ type: 'UPDATE_TODO', payload: todo });
		});
	};
};
