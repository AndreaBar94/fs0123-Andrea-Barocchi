import { POST_EXPERIENCES } from "../actions";

const initialState = {
	content: null,
};

const experienceReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_EXPERIENCES:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default experienceReducer;
