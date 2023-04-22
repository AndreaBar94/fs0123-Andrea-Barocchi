import { ALBUM_INDEX } from "../actions";

const initialState = {
	content: [],
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case ALBUM_INDEX:
			return {
				...state,
				content: [action.payload],
			};
		default:
			return state;
	}
};
export default mainReducer;
