import React, { useState } from "react";

function ListingCard({ image, description, location, handleDelete, id }) {
  const [clicked, setClicked] = useState(true);

  function handleClick() {
    console.log(clicked)
    setClicked(clicked => !clicked)
  }

  function handleDeleteClick() {
    handleDelete(id)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {clicked ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
