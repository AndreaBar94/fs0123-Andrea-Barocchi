import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
import editProfileReducer from "../reducers/editProfileReducer";
import profileReducer from "../reducers/profileReducer";
import searchJobsReducer from "../reducers/searchJobsReducer";
import allProfileReducer from "../reducers/allProfileReducer";
import profileFormReducer from "../reducers/ProfileFormReducer";
import allExpReducer from "../reducers/allExpReducer";
import changeReducer from "../reducers/changeReducer";
import allPostsReducer from "../reducers/allPostsReducer";
import publicPostReducer from "../reducers/publicPostReducer";
import experienceReducer from "../reducers/experienceReducer";
import commentReducer from "../reducers/commentReducer";
import loadingReducer from "../reducers/loadingReducer";
import singleProfileReducer from "../reducers/singleProfileReducer";

const persistConfig = {
	key: "root",
	storage,
	transforms: [
		encryptTransform({
			secretKey: process.env.REACT_APP_SECRET_KEY,
		}),
	],
};

const rootReducer = combineReducers({
	editProfile: editProfileReducer,
	profile: profileReducer,
	searchJobs: searchJobsReducer,
	allProfile: allProfileReducer,
	profileForm: profileFormReducer,
	allExp: allExpReducer,
	changeDelete: changeReducer,
	allPosts: allPostsReducer,
	publicPost: publicPostReducer,
	experiences: experienceReducer,
	comments: commentReducer,
	loading: loadingReducer,
	singleProfile: singleProfileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	// reducer
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
