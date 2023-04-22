import { ALBUMS } from "../actions";

const initialState = {
	content: [],
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case ALBUMS:
			return {
				...state,
				content: [action.payload],
			};
		default:
			return state;
	}
};
export default mainReducer;
