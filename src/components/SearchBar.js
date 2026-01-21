import React, { useState, useCallback } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, placeholder = "Szukaj miasta..." }) => {
  const [query, setQuery] = useState('');

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }, [onSearch]);

  const handleClear = useCallback(() => {
    setQuery('');
    onSearch('');
  }, [onSearch]);

  return (
    <div className="search-bar">
      <span className="search-bar__icon">🔍</span>
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
      {query && (
        <button className="search-bar__clear" onClick={handleClear}>
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
