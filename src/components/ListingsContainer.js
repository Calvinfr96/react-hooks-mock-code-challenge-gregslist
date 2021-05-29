import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, isLoaded, handleDelete }) {
  const listingCards = listings.map(listing => {
    return <ListingCard
      key={listing.id}
      image={listing.image}
      description={listing.description}
      location={listing.location} id={listing.id}
      handleDelete={handleDelete} />
  })
  if (!isLoaded) return <h3>Loading...</h3>
  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
