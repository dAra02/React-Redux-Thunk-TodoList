const initialState = {};

export const fetchTodos = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'GET_TODOS': {
			return { ...state, ...payload };
		}
		case 'ADD_TODO': {
			const todo = Object.values(state).concat(payload);
			return { ...state, ...todo };
		}

		case 'DELETE_TODO': {
			return { ...state };
		}
		case 'UPDATE_TODO': {
			const todo = Object.values(state).map((todo) => {
				if (todo.id === payload.id) {
					return {
						...todo,
						...payload,
					};
				} else {
					return todo;
				}
			});
			return { ...state, ...todo };
		}
		case 'SORT': {
			return Object.values({ ...state }).sort((a, b) => {
				if (a.title.toLowerCase() < b.title.toLowerCase()) {
					return -1;
				}
				if (a.title.toLowerCase() > b.title.toLowerCase()) {
					return 1;
				}
				return 0;
			});
		}

		case 'POISC': {
			let currentTodos = [],
				newList = [];
			if (payload !== '') {
				currentTodos = Object.values({ ...state });
				newList = currentTodos.filter(({ title }) => {
					const element = title.toLowerCase();
					const filter = payload.toLowerCase();

					return element.includes(filter);
				});
			} else {
				newList = state;
			}
			return { ...newList };
		}
		default:
			return state;
	}
};
