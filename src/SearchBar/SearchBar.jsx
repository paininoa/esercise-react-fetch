import { useState } from "react";
import "./SearchBar.scss";

export default ({ value, onChange, onSearch }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={onSearch}>Find</button>
    </div>
  );
};
