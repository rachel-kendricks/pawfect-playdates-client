import React, { useState, useEffect } from "react";
import { addPet, getPlayStyles, getSizes } from "../services/pets";
import { useNavigate } from "react-router-dom";

export const AddPetProfile = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [size, setSize] = useState("");
  const [playStyle, setPlayStyle] = useState("");
  const [bio, setBio] = useState("");
  const [sizes, setSizes] = useState([]);
  const [playStyles, setPlayStyles] = useState([]);
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getSizes().then((sizes) => {
      setSizes(sizes);
    });
  }, []);

  useEffect(() => {
    getPlayStyles().then((playStyles) => {
      setPlayStyles(playStyles);
    });
  }, []);

  const handleSubmit = () => {
    addPet({
      name: name,
      breed: breed,
      size_id: parseInt(size),
      play_style_id: parseInt(playStyle),
      bio: bio,
      img: img,
    }).then(navigate("/mypetprofiles"));
  };

  return (
    <section className="container is-max-desktop has-text-centered">
    <div className="title is-2">
      <h1>Add Your Pet's Info:</h1>
    </div>
    <div >
      <form onSubmit={handleSubmit}>
        <input
          className="input mt-4"
          type="text"
          placeholder="Enter Pet Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input mt-4"
          type="text"
          placeholder="Enter Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          className="input mt-4"
          type="text"
          placeholder="Enter Pet Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <select
          className="select mt-4 mr-2"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">Select Size</option>
          {sizes.map((size) => (
            <option key={size.id} value={size.id}>
              {size.name}
            </option>
          ))}
        </select>
        <select
          className="select mt-4 ml-2"
          value={playStyle}
          onChange={(e) => setPlayStyle(e.target.value)}
        >
          <option value="">Select Play Style</option>
          {playStyles.map((style) => (
            <option key={style.id} value={style.id}>
              {style.name}
            </option>
          ))}
        </select>
        <textarea
          className="textarea mt-4"
          placeholder="Enter Pet Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button className="button my-4" type="submit">
          Submit
        </button>
      </form>
    </div>
    </section>
  );
};
