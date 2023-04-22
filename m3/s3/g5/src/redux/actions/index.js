export const ALBUM_INDEX = "ALBUM_INDEX";
export const ALBUMS = "ALBUMS";
export const LIKES = "LIKES";

export const fetchAlbumIndexAction = async (dispatch) => {
	try {
		const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/395973467");
		if (response.ok) {
			const data = await response.json();
			dispatch({ type: ALBUM_INDEX, payload: data });
		}
	} catch (error) {
		console.log(error);
	}
};

export const fetchAlbumsAction = async (dispatch) => {
	try {
		const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/395973457");
		if (response.ok) {
			const data = await response.json();
			dispatch({ type: ALBUMS, payload: data });
		}
	} catch (error) {
		console.log(error);
	}
};
