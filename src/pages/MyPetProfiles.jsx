import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserFavorites, getUsersPetProfiles } from "../services/pets";
import { PetCard } from "../components/PetCard";
import "../pawfectCSS.css";

export const MyPetProfiles = () => {
  const [usersPetProfiles, setUsersPetProfiles] = useState([]);
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    getUserFavorites().then((favs) => {
      setUserFavorites(favs);
    });
  }, []);

  useEffect(() => {
    getUsersPetProfiles().then((pets) => {
      setUsersPetProfiles(pets);
    });
  }, []);

  return (
    <section className="has-text-centered">
      <div className="header">
        <h1 className="has-text-centered title is-1 mb-6">My Pet Profiles</h1>
      </div>
      <div className=" mybutton button mb-6">
        <Link to="../add">
          <button>Add Pet Profile</button>
        </Link>
      </div>
      <div className="content columns is-multiline">
        {usersPetProfiles.map((pet) => (
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
