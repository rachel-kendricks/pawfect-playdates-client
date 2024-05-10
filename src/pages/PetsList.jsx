import { useState, useEffect } from "react";
import { getAllPets, getUserFavorites } from "../services/pets";
import { PetCard } from "../components/PetCard";
import { Link } from "react-router-dom";

export const PetsList = () => {
  const [allPets, setAllPets] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    getUserFavorites().then((favs) => {
      setUserFavorites(favs);
    });
  }, []);

  useEffect(() => {
    getAllPets().then((pets) => {
      setAllPets(pets);
    });
  }, []);

  return (
    <section>
      <div className="header">
        <h1 className="has-text-centered title is-1 mb-6">Pawfect Playdates</h1>
      </div>
      <div className="content columns is-multiline">
        {allPets.map((pet) => (
          <div className="column is-one-third" key={pet.id}>
            <Link to={`/pets/${pet.id}`}>
              <PetCard pet={pet} userFavorites={userFavorites} key={pet.id} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
