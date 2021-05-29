import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const baseURL = "http://localhost:6001/listings";
  const [listings, setListings] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => {
        setListings(data)
        setIsLoaded(true)
      })
  }, [])

  function handleListingDelete(id) {
    fetch(`${baseURL}/${id}`, { method: "DELETE" })
      .then(resp => resp.json())
      .then(() => {
        const updatedListings = listings.filter(listing => listing.id !== id);
        setListings(updatedListings);
      })
  }

  function handleSearch(searchInput) {
    const searchedListings = listings.filter(listing => {
      const description = listing.description.toLowerCase()
      return description.includes(searchInput)
    })
    setListings(searchedListings)
  }
  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <ListingsContainer
        listings={listings}
        isLoaded={isLoaded}
        handleDelete={handleListingDelete} />
    </div>
  );
}

export default App;
