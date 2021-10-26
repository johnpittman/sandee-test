import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LoadingZone from "../../components/core/LoadingZone";

import "./style.css";

export interface PhotosPageProps {
  errors: any;
  loading: boolean;
  photos: any;
  onSearch: (value: string) => void;
}

function PhotosPage(props: PhotosPageProps) {
  const [address, setAddress] = useState("");

  let baseClassName = "PhotosPage";
  let className = baseClassName;

  let handleSearchChange = (event) => {
    setAddress(event.target.value);
  };

  let handleSearchSubmit = (event) => {
    event.preventDefault();

    props.onSearch(address);
  };

  let contentComponent: any = null;

  if (props.loading) {
    contentComponent = <LoadingZone />;
  } else if (props.photos?.length) {
    contentComponent = props.photos.map((photo) => {
      return (
        <img
          key={photo.url}
          className={`${baseClassName}__img`}
          src={photo.url}
          alt={photo.title}
        />
      );
    });
  } else if (props.errors) {
    contentComponent = "An error occurred. Please try again later.";
  } else {
    contentComponent = "No results.";
  }

  return (
    <div className={className}>
      <div className={`${baseClassName}__filters`}>
        <form onSubmit={handleSearchSubmit}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            onChange={handleSearchChange}
          />
        </form>
      </div>
      <div className={`${baseClassName}__content`}>{contentComponent}</div>
    </div>
  );
}

export default PhotosPage;
