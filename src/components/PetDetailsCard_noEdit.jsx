import { useEffect, useState } from "react";
import { favoritePet, unFavoritePet } from "../services/favorite";
import "../pawfectCSS.css";

export const PetDetailsCard_noEdit = ({ pet, petId, userFavorites }) => {
  const [is_liked, set_is_liked] = useState(false);

  useEffect(() => {
    if (userFavorites.find((thePet) => thePet.id === pet.id)) {
      set_is_liked(true);
    }
  }, [userFavorites, pet]);

  const favorite = () => {
    favoritePet(pet.id).then(set_is_liked(true));
  };

  const unfavorite = () => {
    unFavoritePet(pet.id).then(set_is_liked(false));
  };

  return (
    <section className="card pb-5 pt-1">
      <div className="card-header is-flex is-justify-content-space-between">
        <h1 className="has-text-centered title is-1 mt-2 ml-5 is-flex is-align-content-center">
          {pet.name}
        </h1>
        <p className="is-flex mr-5">
          {is_liked == true ? (
            <button onClick={unfavorite}>
              <i
                className="fa-solid fa-star fa-3x"
                style={{ color: "gold" }}
              ></i>
            </button>
          ) : (
            <button onClick={favorite}>
              <i
                className="fa-regular fa-star fa-3x"
                style={{ color: "gold" }}
              ></i>
            </button>
          )}
        </p>
      </div>
      <div className="card-image">
        <figure className="image">
          <img className="pet-detail-img" src={pet.img} alt="funny dog"></img>
        </figure>
      </div>
      <div className="card-content">
        <ul>
          <li>
            <strong>Size:</strong> {pet.size?.name}
          </li>
          <li>
            <strong>Play Style:</strong> {pet.play_style?.name}
          </li>
          <li>
            <strong>Breed:</strong> {pet.breed}
          </li>
          <li>
            <strong>Bio:</strong> {pet.bio}
          </li>
          <li>
            <strong>Owner Name:</strong> {pet.user?.first_name}{" "}
            {pet.user?.last_name}
          </li>
          <li>
            <strong>Owner Email:</strong> {pet.user?.email}
          </li>
        </ul>
      </div>
    </section>
  );
};
