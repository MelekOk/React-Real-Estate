import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store/searchSlice';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setQuery(e.target.value);  
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(query)); 
  };

  return (
    <form onSubmit={handleSearchSubmit} 
    style={{
        textAlign: "center",
        marginTop: "10px"
    }}
    >
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        placeholder="İlanlarda Arama Yapın..."
      />
      <button type="submit"
      style={{
        backgroundColor: "aliceblue",
        color: "blue",
        borderRadius: "5px",
        border: "1px solid blue",
        marginLeft: "5px"
      }}
      >Ara</button>
    </form>
  );
}
