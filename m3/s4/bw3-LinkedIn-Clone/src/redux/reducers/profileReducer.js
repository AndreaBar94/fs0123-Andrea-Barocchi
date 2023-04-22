import { PROFILE } from "../actions";

const initialState = {
	content: null,
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case PROFILE:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default profileReducer;
