import React from "react";

type SearchProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  return (
    <div className="search">
      <div>
        <img src="/search.svg" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search through thousands of movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
// className="inline w-6 h-6 mr-2 mb-1"
