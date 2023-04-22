import { combineReducers, configureStore } from "@reduxjs/toolkit";
import index from "../reducers/index";
import albums from "../reducers/albums";
import likes from "../reducers/likes";
// import cartReducer from "../reducers/cartReducer";
// import userReducer from "../reducers/userReducer";
// import adminReducer from "../reducers/adminReducer";
// import bookSelectedReducer from "../reducers/bookSelectedReducer";
// import booksReducer from "../reducers/booksReducer";

const rootReducer = combineReducers({
	indexAlbum: index,
	albums: albums,
	likes: likes,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
