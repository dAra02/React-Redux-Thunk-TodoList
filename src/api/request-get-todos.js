export const fetchGetTodos = () => {
	return fetch('http://localhost:3005/Todos', {
		method: 'GET',
	})
		.then((dannie) => dannie.json())
		.then((todos) => todos);
};
