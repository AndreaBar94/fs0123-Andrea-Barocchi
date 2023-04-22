import { LIKES } from "../actions";

const initialState = {
	content: [],
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIKES:
			return {
				...state,
				content: [...state.content, action.payload],
			};
		default:
			return state;
	}
};
export default mainReducer;
