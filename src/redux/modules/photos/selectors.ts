import { createSelector } from "reselect";

export function selectPhotosData(state) {
  return state.pages.photos?.data;
}

export function selectPhotosError(state) {
  return state.pages.photos?.errors;
}

export function selectPhotosLoading(state) {
  return state.pages.photos?.loading;
}

export const selectPhotoURLs = createSelector(
  selectPhotosData,
  (photosData) => {
    console.log(photosData);

    let result = photosData?.photos?.photo?.map((photoItem) => {
      return {
        title: photoItem.title,
        url: `https://live.staticflickr.com/${photoItem.server}/${photoItem.id}_${photoItem.secret}.jpg`,
      };
    });
    console.log(result);

    return result;
  }
);
