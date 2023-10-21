import { useState } from "react";

export const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleType = (event) => {
    setSearchType(event);
  };

  const handleKey = (event) => {
    if (event.key === "Enter" && searchValue.length > 0) {
      props.searchFilm(searchValue, searchType);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              onChange={handleChange}
              placeholder="search"
              type="search"
              className="validate"
              onKeyDown={handleKey}
            />
          </div>
        </div>
      </div>
      <label>
        <input
          className="with-gap"
          name="group3"
          type="radio"
          onChange={() => handleType("all")}
          onClick={() => {
            searchValue.length > 0 ? props.searchFilm(searchValue, "all") : <h4>Page not found</h4>
          }}
        />
        <span>All</span>
      </label>
      <label>
        <input
          className="with-gap"
          name="group3"
          type="radio"
          onChange={() => handleType("movie")}
          onClick={() => {
            searchValue.length > 0 ? props.searchFilm(searchValue, "movie") : <h4>Page not found</h4>
          }}
        />
        <span>Movie</span>
      </label>
      <label>
        <input
          className="with-gap"
          name="group3"
          type="radio"
          onChange={() => handleType("series")}
          onClick={() => {
            searchValue.length > 0 ? props.searchFilm(searchValue, "series") : <h4>Page not found</h4>
          }}
        />
        <span>Series</span>
      </label>
    </div>
  );
};
