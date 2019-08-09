import React, { Component } from "react";
import axios from "axios";

const Search = ({ placeholder, searchValue, updateSearchValue }) => (
  <section>
    <input
      type="search"
      placeholder={placeholder}
      onChange={updateSearchValue}
      value={searchValue}
    ></input>
  </section>
);

export default Search;
