import { useState } from "react";
import "./SearchBar.scss";

export default ({ value, onChange, onSearch }) => {
  return (
    <>
      <h1>Search a country</h1>
      <div className="searchWrapper">
        <input type="text" value={value} onChange={onChange} />
        <button onClick={onSearch}>Find</button>
      </div>
    </>
  );
};
