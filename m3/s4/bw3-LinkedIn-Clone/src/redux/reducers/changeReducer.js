import { CHANGE_EXP } from "../actions";

const initialState = {
	content: null,
};

const changeNdeleteReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_EXP:
			return {
				...state,
				content: action.payload,
			};
		default:
			return state;
	}
};

export default changeNdeleteReducer;
