export const fetchAddTodos = () => {
	return fetch('http://localhost:3005/Todos', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: prompt('Введите новые дела'),
		}),
	}).then((otvet) => otvet.json());
};
