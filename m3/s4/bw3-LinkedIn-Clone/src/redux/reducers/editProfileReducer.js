import { SET_PROFILE } from "../actions";

const initialState = {
	content: null,
};

const editProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PROFILE:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default editProfileReducer;
