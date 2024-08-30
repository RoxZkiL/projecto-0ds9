/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="main-searchbar-container">
      <h3 className="searchbar-title">Recursos y Tips</h3>
      <div className="searchbar-container">
        <div className="searchbar-wrapper">
          <input
            className="searchbar"
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={handleInputChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
            className="searchbar-icon"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
