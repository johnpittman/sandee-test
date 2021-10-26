import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrievePhotos } from "../../redux/modules/photos/actions";
import {
  selectPhotoURLs,
  selectPhotosLoading,
  selectPhotosError
} from "../../redux/modules/photos/selectors";

import Component from "./component";

function PhotosPageContainer() {
  let dispatch = useDispatch();
  let errors = useSelector(selectPhotosError);
  let photos = useSelector(selectPhotoURLs);
  let loading = useSelector(selectPhotosLoading);

  return (
    <Component
      errors={errors}
      loading={loading}
      photos={photos}
      onSearch={(value) => {
        dispatch(retrievePhotos({ q: value }));
      }}
      onSearchChange={(value) => {
        dispatch(retrievePhotos({ q: value }));
      }}
    />
  );
}

export default PhotosPageContainer;
