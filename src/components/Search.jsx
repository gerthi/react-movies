import React from "react";

const Search = (props) => {
  return (
    <form>
      <input type="text" onChange={props.handleSearch} />
    </form>
  );
};

export default Search;
