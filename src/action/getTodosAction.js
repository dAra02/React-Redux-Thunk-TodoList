import { fetchGetTodos } from '../api';

export const getTodos = () => {
	return (dispatch) => {
		return fetchGetTodos()
			.then((todo) => {
				dispatch({ type: 'GET_TODOS', payload: todo });
			})
			.finally(() => dispatch({ type: 'LOADING' }));
	};
};
