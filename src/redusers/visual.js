const initialState = {
	isLoading: true,
};

export const visual = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case 'LOADING':
			return { ...state, isLoading: false };
		default:
			return state;
	}
};
