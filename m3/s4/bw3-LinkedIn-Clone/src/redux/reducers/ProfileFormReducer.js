import { GET_FORM_DATA } from "../actions";

const initialState = {
	content: null,
};

const profileFormReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FORM_DATA:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default profileFormReducer;
