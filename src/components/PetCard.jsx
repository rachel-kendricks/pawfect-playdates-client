import { useState, useEffect } from "react";
import "./PetCard.css";
import { getUserFavorites } from "../services/pets";
import { favoritePet, unFavoritePet } from "../services/favorite";
import "../pawfectCSS.css";

export const PetCard = ({ pet, userFavorites }) => {
  const [is_liked, set_is_liked] = useState(false);

  useEffect(() => {
    if (userFavorites.find((thePet) => thePet.id === pet.id)) {
      set_is_liked(true);
    }
  }, [userFavorites, pet]);

  return (
    <div className="card has-background-grey-lighter mx-2" key={pet.id}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img className="card-img p-4" src={pet.img} alt="funny dog"></img>
        </figure>
      </div>
      <div className="card-content">
        <h4 className="title is-4">{pet.name}</h4>
        <div className="content">
          <p>
            {is_liked == true ? (
              <i className="fa-solid fa-star"></i>
            ) : (
              <i className="fa-regular fa-star"></i>
            )}
          </p>
          <p>Size: {pet.size.name}</p>
          <p>Play Style: {pet.play_style.name}</p>
          <p>Breed: {pet.breed}</p>
        </div>
      </div>
    </div>
  );
};

//get all pets liked by current user
//if this pet is one of those, set_liked to true

{
  /* <p className="control">
{is_liked == true ? (
  <button
    className="button is-link is-outlined"
    onClick={unlike}
  >
    <span className="icon is-small">
      <i className="fas fa-heart-broken"></i>
    </span>
    <span>Unlike Product</span>
  </button>
) : (
  <button className="button is-link is-outlined" onClick={like}>
    <span className="icon is-small">
      <i className="fas fa-heart"></i>
    </span>
    <span>Like Product</span>
  </button>
)}
</p> */
}
