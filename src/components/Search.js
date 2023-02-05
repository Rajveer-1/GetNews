import React, { useState } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = document.querySelector(`[data-title="${searchTerm}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("No results found");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};