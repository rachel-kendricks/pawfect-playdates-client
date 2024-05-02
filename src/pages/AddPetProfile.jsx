import React, { useState, useEffect } from 'react';
import { addPet, getPlayStyles, getSizes } from '../services/pets';
import { useNavigate } from 'react-router-dom';

export const AddPetProfile = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [size, setSize] = useState("");
  const [playStyle, setPlayStyle] = useState("");
  const [bio, setBio] = useState("");
  const [sizes, setSizes] = useState([]);
  const [playStyles, setPlayStyles] = useState([]);
  const navigate = useNavigate()

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
        "name": name,
        "breed": breed,
        "size_id": parseInt(size),
        "play_style_id": parseInt(playStyle),
        "bio": bio
    }).then(navigate("/mypetprofiles"))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Pet Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Pet Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <select value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="">Select Size</option>
        {sizes.map((size) => (
          <option key={size.id} value={size.id}>
            {size.name}
          </option>
        ))}
      </select>
      <select value={playStyle} onChange={(e) => setPlayStyle(e.target.value)}>
        <option value="">Select Play Style</option>
        {playStyles.map((style) => (
          <option key={style.id} value={style.id}>
            {style.name}
          </option>
        ))}
      </select>
      <textarea
        placeholder="Enter Pet Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};