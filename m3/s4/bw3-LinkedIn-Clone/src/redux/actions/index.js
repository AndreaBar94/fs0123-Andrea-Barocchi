import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SET_PROFILE = "SET_PROFILE";
export const PROFILE = "PROFILE";
export const ALL_PROFILE = "ALL_PROFILE";
export const GET_FORM_DATA = "GET_FORM_DATA";
export const GET_SEARCH_DATA = "GET_SEARCH_DATA";
export const POST_EXPERIENCES = "POST_EXPERIENCES";
export const ALL_EXPERIENCES = "ALL_EXPERIENCES";
export const CHANGE_EXP = "CHANGE_EXP";
export const DELETE_EXP = "DELETE_EXP";
export const PUT_EXPERIENCES = "PUT_EXPERIENCES";
export const GET_POSTS = "GET_POSTS";
export const NEW_POST = "NEW_POST";
export const PUBLIC_POST = "PUBLIC_POST";
export const JOBS = "JOBS";
export const COMMENTS = "COMMENTS";
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const SINGLE_PROFILE = "SINGLE_PROFILE";

export const postFormAction = (content) => ({ type: POST_EXPERIENCES, payload: content });
export const getFormAction = (content) => ({ type: GET_FORM_DATA, payload: content });
export const getSearchAction = (content) => ({ type: GET_SEARCH_DATA, payload: content });

const generalProfileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";
const persProfileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
const searchProfileEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";
const postsEndpoint = "https://striveschool-api.herokuapp.com/api/posts";

export const singleProfileFetchAction = (id) => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint + id, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				const data = await response.json();
				dispatch({ type: SINGLE_PROFILE, payload: data });
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const profileFetchAction = (id) => {
	return async (dispatch) => {
		try {
			const response = await fetch(persProfileEndpoint, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				const data = await response.json();
				dispatch({ type: PROFILE, payload: data });
				dispatch(getExperiencesAction(id));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const searchProfileAction = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(searchProfileEndpoint + { GET_SEARCH_DATA }, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				const searchedProfile = await response.json();
				dispatch({ type: PROFILE, payload: searchedProfile });
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const allProfileFetchAction = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				const data = await response.json();
				dispatch({ type: ALL_PROFILE, payload: data });
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const editProfileAction = (newData) => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
				body: JSON.stringify(newData),
			});
			if (response.ok) {
				const newProfileData = await response.json();
				dispatch({ type: PROFILE, payload: newProfileData });
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const editProfileImageAction = (dataImage, userID) => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint + userID + "/picture", {
				method: "POST",
				headers: {
					// "Content-Type": "multipart/form-data",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
				body: dataImage,
			});
			if (response.ok) {
				const newProfileImageData = await response.json();
				dispatch({ type: PROFILE, payload: newProfileImageData });
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const postExperiencesAction = (newExp, userID) => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint + userID + "/experiences", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
				body: JSON.stringify(newExp),
			});
			if (response.ok) {
				const newExperience = await response.json();
				dispatch({ type: POST_EXPERIENCES, payload: newExperience });
				dispatch(getExperiencesAction(userID));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getExperiencesAction = (userID) => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint + userID + "/experiences", {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				const allExperiences = await response.json();
				dispatch({ type: ALL_EXPERIENCES, payload: allExperiences });
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const deleteExperiencesAction = (userID, expID) => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint + userID + "/experiences/" + expID, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				alert("Esperienza eliminata!");
				dispatch(getExperiencesAction(userID));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const putExperienceAction = (newData, userID, expID) => {
	return async (dispatch) => {
		try {
			const response = await fetch(generalProfileEndpoint + userID + "/experiences/" + expID, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
				body: JSON.stringify(newData),
			});
			if (response.ok) {
				const newExpData = await response.json();
				dispatch({ type: CHANGE_EXP, payload: newExpData });
				dispatch(getExperiencesAction(userID));
			}
		} catch (error) {
			console.log(error);
		}
	};
};
export const getPostsAction = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(postsEndpoint, {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				const allPosts = await response.json();
				dispatch({ type: GET_POSTS, payload: allPosts });
			}
		} catch (error) {
			console.log(error);
		}
	};
};
export const postPostAction = (newData) => {
	return async (dispatch) => {
		try {
			const response = await fetch(postsEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
				body: JSON.stringify({ text: newData }),
			});
			if (response.ok) {
				const newPostData = await response.json();
				dispatch({ type: PUBLIC_POST, payload: newPostData });
				dispatch(getPostsAction());
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const putPostAction = (newData, postID) => {
	return async (dispatch) => {
		try {
			const response = await fetch(postsEndpoint + "/" + postID, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
				body: JSON.stringify({ text: newData }),
			});
			if (response.ok) {
				dispatch(getPostsAction());
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const deletePostAction = (postID) => {
	return async (dispatch) => {
		try {
			const response = await fetch(postsEndpoint + "/" + postID, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				alert("Post eliminato!");
				dispatch(getPostsAction());
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const searchJobAction = (search) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${search}`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			if (response.ok) {
				const jobs = await response.json();
				dispatch({ type: JOBS, payload: jobs.data });
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getCommentAction = (postID) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${postID}`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_COMMENT_KEY}`,
				},
			});
			if (response.ok) {
				const comments = await response.json();
				dispatch({ type: COMMENTS, payload: comments });
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const startLoading = () => ({
	type: START_LOADING
});

export const stopLoading = () => ({
	type: STOP_LOADING
});
export const postCommentAction = (postID, comment) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_COMMENT_KEY}`,
				},
				body: JSON.stringify(comment),
			});
			if (response.ok) {
				alert("Commento Pubblicato!");
				dispatch(getCommentAction(postID));
				// const comments = await response.json();
				// dispatch({ type: COMMENTS, payload: comments });
			}
		} catch (error) {
			console.log(error);
		}
	};
};
