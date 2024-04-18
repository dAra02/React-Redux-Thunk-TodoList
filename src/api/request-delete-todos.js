export const fetchDeleteTodo = () => {
	return fetch(`http://localhost:3005/Todos/${Number(prompt('Ввести id заметки для удаления'))}`, {
		method: 'DELETE',
	}).then((otvet) => otvet.json());
};
