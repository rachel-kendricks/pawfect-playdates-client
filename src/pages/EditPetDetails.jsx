import React, { useState, useEffect } from 'react';
import { getPlayStyles, getSinglePet, getSizes, updatePet } from '../services/pets';
import { useNavigate, useParams } from 'react-router-dom';

export const EditPetDetails = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [size, setSize] = useState("");
  const [playStyle, setPlayStyle] = useState("");
  const [bio, setBio] = useState("");
  const [sizes, setSizes] = useState([]);
  const [playStyles, setPlayStyles] = useState([]);
  const [img, setImg] = useState("");
  const { petId } = useParams({});
  const navigate = useNavigate()

  useEffect(() => {
    getSinglePet(petId).then((pet) => {
        setName(pet.name)
        setBreed(pet.breed)
        setBio(pet.bio)
        setSize(pet.size.id)
        setPlayStyle(pet.play_style.id)
        setImg(pet.img)
    });
}, [petId])
  
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
    updatePet(petId, {
        "name": name,
        "breed": breed,
        "size_id": parseInt(size),
        "play_style_id": parseInt(playStyle),
        "bio": bio,
        "img": img,
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
      placeholder="Enter Image URL"
      value={img}
      onChange={(e) => setImg(e.target.value)}
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
      <button type="submit">Update Profile</button>
    </form>
  );
};
