// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
// import { useDebounce } from "use-debounce";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoadingZone from "../../components/core/LoadingZone";

import "./style.css";

export interface PhotosPageProps {
  errors: any;
  loading: boolean;
  photos: any;
  onSearch: (value: string) => void;
}

function PhotosPage(props: PhotosPageProps) {
  const [search, setSearch] = useState("");
  // const [searchValue] = useDebounce(search, 500);

  let baseClassName = "PhotosPage";
  let className = baseClassName;

  let handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  let handleSearchSubmit = (event) => {
    event.preventDefault();

    props.onSearch(search);
  };

  // useEffect(() => {
  //   props.onSearch(searchValue);
  // }, [searchValue]);

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
      <form
        className={`${baseClassName}__filters`}
        onSubmit={handleSearchSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={handleSearchChange}
        />
        <Button
          disabled={props.loading}
          variant="contained"
          sx={{
            height: 34,
            marginTop: 1,
          }}
          onClick={handleSearchSubmit}
        >
          Search
        </Button>
      </form>
      <div className={`${baseClassName}__content`}>{contentComponent}</div>
    </div>
  );
}

export default PhotosPage;
