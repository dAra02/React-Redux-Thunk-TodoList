import { fetchDeleteTodo } from '../api';

export const deleteTodo = () => {
	return (dispatch) => {
		return fetchDeleteTodo().then(() => {
			dispatch({ type: 'DELETE_TODO' });
		});
	};
};
