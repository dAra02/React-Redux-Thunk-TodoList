export const fetchUpdateTodos = () => {
	return fetch(`http://localhost:3005/Todos/${Number(prompt('Ввести id заметки'))}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: prompt('Изменить заметку'),
		}),
	})
		.then((otvet) => otvet.json())
		.then((todo) => todo);
};
