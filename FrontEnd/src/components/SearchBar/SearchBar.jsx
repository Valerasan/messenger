import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input className="search-bar_input " type="text" placeholder="Search" />
    </div>
  );
}
