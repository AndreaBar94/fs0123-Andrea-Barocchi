import { PUBLIC_POST } from "../actions";

const initialState = {
	content: null,
};

const publicPostReducer = (state = initialState, action) => {
	switch (action.type) {
		case PUBLIC_POST:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default publicPostReducer;
