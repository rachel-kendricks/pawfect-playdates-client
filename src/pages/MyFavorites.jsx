import { useEffect, useState } from "react";
import { getUserFavorites } from "../services/pets";
import { Link } from "react-router-dom";
import { PetCard } from "../components/PetCard";
import "../pawfectCSS.css";

export const MyFavorites = () => {
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    getUserFavorites().then((favs) => {
      setUserFavorites(favs);
    });
  }, []);

  return (
    <section>
      <div className="header">
        <h1 className="has-text-centered title is-1 mb-6">My Favorites</h1>
      </div>
      <div className="content columns is-multiline">
        {userFavorites.map((pet) => (
          <div className="column is-one-third" key={pet.id}>
            <Link to={`/pets/${pet.id}`}>
              <PetCard pet={pet} key={pet.id} userFavorites={userFavorites} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
