import { SINGLE_PROFILE } from "../actions";

const initialState = {
	content: null,
};

const singleProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SINGLE_PROFILE:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default singleProfileReducer;
