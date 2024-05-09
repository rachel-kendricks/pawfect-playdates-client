import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSinglePet, getUserFavorites } from "../services/pets";
import { PetDetailsCard } from "../components/PetDetailsCard";
import { PetDetailsCard_noEdit } from "../components/PetDetailsCard_noEdit";

export const PetDetails = () => {
  const { petId } = useParams({});
  const [pet, setPet] = useState({});
  const [user, setUser] = useState("");
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    getUserFavorites().then((favs) => {
      setUserFavorites(favs);
    });
  }, []);

  useEffect(() => {
    getSinglePet(petId).then((pet) => {
      setPet(pet);
    });
  }, []);

  useEffect(() => {
    const pawfectTokenString = localStorage.getItem("pawfect_token");
    if (pawfectTokenString) {
      const pawfectToken = JSON.parse(pawfectTokenString);
      setUser(pawfectToken.id);
    }
  }, []);

  return (
    <section>
      <div className="header">
        {/* <h1 className="has-text-centered title is-1 mb-6">Pet Details</h1> */}
      </div>
      <div className="container is-max-desktop has-text-centered">
        {pet.user?.id === user ? (
          <PetDetailsCard
            pet={pet}
            petId={petId}
            userFavorites={userFavorites}
          />
        ) : (
          <PetDetailsCard_noEdit
            pet={pet}
            petId={petId}
            userFavorites={userFavorites}
          />
        )}
      </div>
    </section>
  );
};
