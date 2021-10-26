import { flickrAPI } from "../../../utils/api";
import env from "../../../env";

export const RETRIEVE_PHOTOS = "RETRIEVE_PHOTOS";
export const RETRIEVE_PHOTOS_ERROR = "RETRIEVE_PHOTOS_ERROR";
export const RETRIEVE_PHOTOS_SUCCESS = "RETRIEVE_PHOTOS_SUCCESS";

export const retrievePhotos = (params: { q: string }) => {
  return async (dispatch) => {
    if (params.q) {
      try {
        dispatch({
          type: RETRIEVE_PHOTOS,
        });

        const fetchResp = await fetch(
          flickrAPI(
            `?method=flickr.photos.search&api_key=${env.FLICKR_KEY}&format=json&nojsoncallback=1&text=${params.q}&per_page=10`
          )
        );
        const parsedResp = await fetchResp.json();

        dispatch({
          type: RETRIEVE_PHOTOS_SUCCESS,
          payload: parsedResp,
        });
      } catch (err) {
        dispatch({
          type: RETRIEVE_PHOTOS_ERROR,
          payload: {
            error: err,
          },
        });
      }
    }
  };
};
